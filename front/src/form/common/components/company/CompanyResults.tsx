import React from "react";
import { Tooltip } from "@reach/tooltip";

import {
  IconCheckCircle1,
  IconTrackDechetsCheck,
  IconSignBadgeCircle,
} from "common/components/Icons";
import styles from "./CompanyResult.module.scss";
import { CompanySearchResult } from "../../../../generated/graphql/types";
import { generatePath } from "react-router-dom";
import routes from "common/routes";

interface CompanyResultsProps<T> {
  results: T[];
  onSelect: (item: T) => void;
  selectedItem: T | null;
}

export default function CompanyResults<
  T extends Pick<
    CompanySearchResult,
    "siret" | "name" | "address" | "isRegistered"
  >
>({ results, onSelect, selectedItem }: CompanyResultsProps<T>) {
  return (
    <ul className={styles.results}>
      {results
        .concat(
          // append selectedItem if it's set and it's not in the results
          !selectedItem?.siret ||
            results.find(result => result.siret === selectedItem.siret)
            ? []
            : [selectedItem]
        )
        .map(item => (
          <li
            key={item.siret!}
            className={`${styles.resultsItem}  ${
              selectedItem?.siret === item.siret ? styles.isSelected : ""
            }`}
            onClick={() => onSelect(item)}
          >
            <div className={styles.content}>
              <h6 className="tw-flex tw-items-center tw-align-middle">
                <div className="tw-mt-1">
                  {item.name ? item.name : "[Nom inconnu]"}
                </div>
                {item.isRegistered === true && (
                  <div className="tw-ml-1">
                    <IconTrackDechetsCheck />
                  </div>
                )}
              </h6>
              <p>
                {item.siret} -{" "}
                {item.address ? item.address : "[Adresse inconnue]"}
              </p>
              <p>
                <a
                  href={generatePath(routes.company, { siret: item.siret! })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Information sur l'entreprise
                </a>
              </p>
            </div>
            <div className={styles.icon}>
              {selectedItem?.siret === item.siret ? (
                <IconCheckCircle1 />
              ) : (
                <IconSignBadgeCircle />
              )}
            </div>
          </li>
        ))}
    </ul>
  );
}
