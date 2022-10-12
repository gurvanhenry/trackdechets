import { isValid, parseISO } from "date-fns";
import prompts from "prompts";
import logger from "../../logging/logger";
import prisma from "../../prisma";
import { reindexPartialInPlace } from "../../bsds/indexation/bulkIndexBsds";
import { index } from "../../common/elastic";
import { BsdType } from "../../generated/graphql/types";
import { closeQueues } from "../../queue/producers";

const bsdTypes: BsdType[] = ["BSDD", "BSDA", "BSDASRI", "BSVHU", "BSFF"];

function doubleLog(msg: string, err?: any) {
  console.log(msg);
  logger.info(msg, err);
}

async function exitScript() {
  doubleLog("Finished reindex-in-place script, exiting");
  await prisma.$disconnect();
  await closeQueues();
}

(async function () {
  const args = process.argv.slice(2);
  const force = args.includes("-f") || args.includes("--force");
  const useQueue = args.includes("--useQueue");
  const bsdTypesToIndex = bsdTypes.filter(t =>
    args.map(a => a.toUpperCase()).includes(t)
  );

  const matchIsoDate = args.filter(
    arg => arg.match(/^\d{4}-\d{2}-\d{2}$/)?.length > 0
  )[0];

  let since;
  if (matchIsoDate) {
    since = parseISO(matchIsoDate);
    if (!isValid(since)) {
      doubleLog(
        "You must pass a Date in the following format '--since YYYY-MM-DD'"
      );
      return;
    }
  }

  try {
    if (bsdTypesToIndex.length > 1) {
      doubleLog("You can only specify one bsd type to index");
      return;
    }

    const bsdTypeToIndex = bsdTypesToIndex[0];

    if (!bsdTypeToIndex && !since) {
      doubleLog(
        "You can target whether one bsd type OR a date '--since YYYY-MM-DD' to target the re-indexation in place"
      );
      return;
    }
    if (force) {
      if (!bsdTypeToIndex) {
        doubleLog(
          "You can only force delete existing bsd when passing a BSD type as a command argument"
        );
        return;
      }
      await prompts({
        type: "confirm",
        name: "force",
        message:
          "Can you confirm to force delete bsds from the index before indexing them again ?",
        initial: false
      });
    }
    await reindexPartialInPlace(
      index,
      bsdTypeToIndex,
      force,
      useQueue,
      since ?? undefined
    );
  } catch (error) {
    doubleLog("reindex-in-place failed, error:", error);
  } finally {
    await exitScript();
  }
})();
