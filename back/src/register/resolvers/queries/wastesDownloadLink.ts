import {
  QueryResolvers,
  QueryWastesDownloadLinkArgs
} from "../../../generated/graphql/types";
import { checkIsAuthenticated } from "../../../common/permissions";
import { checkIsCompanyMember } from "../../../users/permissions";
import { getFileDownload } from "../../../common/fileDownload";
import { DownloadHandler } from "../../../routers/downloadRouter";
import { getRegisterFileName } from "../../filename";
import * as Excel from "exceljs";
import { format } from "@fast-csv/format";
import { wasteFormatter, wastesReader } from "../../streams";
import { getXlsxHeaders } from "../../columns";
import { searchBsds } from "../../elastic";
import { UserInputError } from "apollo-server-core";

export const wastesDownloadHandler: DownloadHandler<QueryWastesDownloadLinkArgs> =
  {
    name: "wastesDownloadLink",
    handler: (_, res, args) => {
      const reader = wastesReader({
        registerType: args.registerType,
        sirets: args.sirets,
        where: args.where,
        chunk: 100
      });

      const filename = getRegisterFileName(args.registerType, args.sirets);

      switch (args.fileType) {
        case "CSV": {
          res.set(
            "Content-disposition",
            `attachment; filename=${filename}.csv`
          );
          res.set("Content-Type", "text/csv");
          res.set("Transfer-Encoding", "chunked");
          const csvStream = format({ headers: true, delimiter: ";" });
          const transformer = wasteFormatter({ useLabelAsKey: true });
          reader.pipe(transformer).pipe(csvStream).pipe(res);
          break;
        }
        case "XLSX": {
          res.set(
            "Content-Disposition",
            `attachment; filename=${filename}.xlsx`
          );
          const contenType =
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
          res.set("Content-Type", contenType);
          res.set("Transfer-Encoding", "chunked");
          const workbook = new Excel.stream.xlsx.WorkbookWriter({
            stream: res
          });
          const worksheet = workbook.addWorksheet("registre");
          const transformer = wasteFormatter();
          reader.pipe(transformer);
          transformer.on("data", waste => {
            if (worksheet.columns === null) {
              // write headers if not present
              worksheet.columns = getXlsxHeaders(waste);
            }
            worksheet.addRow(waste, "n").commit();
          });

          transformer.on("end", () => {
            worksheet.commit();
            workbook.commit();
          });

          break;
        }
      }
    }
  };

const wastesDownloadLinkResolver: QueryResolvers["wastesDownloadLink"] = async (
  _,
  args,
  context
) => {
  const user = checkIsAuthenticated(context);

  for (const siret of args.sirets) {
    await checkIsCompanyMember({ id: user.id }, { siret });
  }

  const hits = await searchBsds(args.registerType, args.sirets, args.where, {
    size: 1,
    sort: [{ id: "ASC" }]
  });

  if (hits.total === 0) {
    throw new UserInputError(
      "Aucune donnée à exporter sur la période sélectionnée"
    );
  }

  return getFileDownload({ handler: wastesDownloadHandler.name, params: args });
};

export default wastesDownloadLinkResolver;
