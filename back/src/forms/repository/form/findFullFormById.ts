import { ReadRepositoryFnDeps } from "../../../common/repository/types";
import { FullForm } from "../../types";

export type FindFullFormByIdFn = (id: string) => Promise<FullForm>;

const buildFindFullFormById: (
  deps: ReadRepositoryFnDeps
) => FindFullFormByIdFn =
  ({ prisma }) =>
  id =>
    prisma.form.findUnique({
      where: { id },
      include: {
        forwardedIn: true,
        transportSegments: true,
        intermediaries: true
      }
    });

export default buildFindFullFormById;
