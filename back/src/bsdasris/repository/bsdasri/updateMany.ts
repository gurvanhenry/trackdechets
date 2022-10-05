import { Prisma } from "@prisma/client";
import { LogMetadata, RepositoryFnDeps } from "../../../forms/repository/types";
import { enqueueBsdToIndex } from "../../../queue/producers/elastic";

export type UpdateManyBsdasriFn = (
  where: Prisma.BsdasriWhereInput,
  data: Prisma.XOR<
    Prisma.BsdasriUpdateManyMutationInput,
    Prisma.BsdasriUncheckedUpdateManyInput
  >,
  logMetadata?: LogMetadata
) => Promise<Prisma.BatchPayload>;

export function buildUpdateManyBsdasris(
  deps: RepositoryFnDeps
): UpdateManyBsdasriFn {
  return async (where, data, logMetadata) => {
    const { prisma, user } = deps;

    const update = await prisma.bsdasri.updateMany({
      where,
      data
    });

    const updatedBsdasris = await prisma.bsdasri.findMany({
      where,
      select: { id: true }
    });

    const ids = updatedBsdasris.map(({ id }) => id);

    const eventsData = ids.map(id => ({
      streamId: id,
      actor: user.id,
      type: "BsdasriUpdated",
      data: data as Prisma.InputJsonObject,
      metadata: { ...logMetadata, authType: user.auth }
    }));

    await prisma.event.createMany({
      data: eventsData
    });
    for (const id of ids) {
      prisma.addAfterCommitCallback(() => enqueueBsdToIndex(id));
    }

    return update;
  };
}