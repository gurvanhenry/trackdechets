import { BsffWhere, BsffOperationCode } from "../generated/graphql/types";
import { Prisma } from "@prisma/client";
import { safeInput } from "../common/converter";
import {
  toPrismaDateFilter,
  toPrismaEnumFilter,
  toPrismaStringFilter,
  toPrismaNestedWhereInput,
  toPrismaGenericWhereInput
} from "../common/where";

function toPrismaBsffWhereInput(where: BsffWhere): Prisma.BsffWhereInput {
  return safeInput<Prisma.BsffWhereInput>({
    ...toPrismaGenericWhereInput(where),
    status: toPrismaEnumFilter(where.status),
    emitterCompanySiret: toPrismaStringFilter(where.emitter?.company?.siret),
    emitterEmissionSignatureDate: toPrismaDateFilter(
      where.emitter?.emission?.signature?.date
    ),
    transporterCompanySiret: toPrismaStringFilter(
      where.transporter?.company?.siret
    ),
    transporterTransportSignatureDate: toPrismaDateFilter(
      where.transporter?.transport?.signature?.date
    ),
    destinationCompanySiret: toPrismaStringFilter(
      where.destination?.company?.siret
    ),
    destinationReceptionSignatureDate: toPrismaDateFilter(
      where.destination?.reception?.signature.date
    ),
    destinationOperationCode: toPrismaEnumFilter<BsffOperationCode>(
      where.destination?.operation?.code
    ),
    destinationOperationSignatureDate: toPrismaDateFilter(
      where.destination?.operation?.signature?.date
    ),
    ...(where?.packagings?.numero
      ? {
          packagings: {
            some: { numero: toPrismaStringFilter(where.packagings.numero) }
          }
        }
      : {})
  });
}
export function toPrismaWhereInput(where: BsffWhere): Prisma.BsffWhereInput {
  return toPrismaNestedWhereInput(where, toPrismaBsffWhereInput);
}
