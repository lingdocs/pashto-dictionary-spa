/**
 * Copyright (c) lingdocs.com
 *
 * This source code is licensed under the GPL3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import ExtraEntryInfo from "../components/ExtraEntryInfo";
import classNames from "classnames";
import { Types as T, InlinePs } from "@lingdocs/pashto-inflector";
import playStorageAudio from "./PlayStorageAudio";
import { getRecordedGenders } from "../lib/recorded-genders";

function Entry({
  entry,
  textOptions,
  nonClickable,
  isolateEntry,
}: {
  entry: T.DictionaryEntry;
  textOptions: T.TextOptions;
  nonClickable?: boolean;
  isolateEntry?: (ts: number) => void;
  admin: boolean;
}) {
  const gendersRecorded = getRecordedGenders(entry);
  function handlePlayStorageAudio(gender: T.Gender) {
    return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.stopPropagation();
      playStorageAudio(entry.ts, gender, entry.p, () => null);
    };
  }
  return (
    <div
      className={classNames("entry", { clickable: !nonClickable })}
      onClick={
        !nonClickable && isolateEntry ? () => isolateEntry(entry.ts) : undefined
      }
      data-testid="entry"
    >
      <div>
        <dt className="mr-2">
          <InlinePs opts={textOptions} ps={{ p: entry.p, f: entry.f }} />
        </dt>
        {` `}
        {/* Can't figure out why but the <em> here can't be empty */}
        <em className="mr-1">{entry.c || "\u00A0"}</em>
        {!nonClickable &&
          gendersRecorded.map((gender) => (
            <span className="ml-2">
              <span className="text-muted mr-1">{gender[0]}</span>
              <i
                onClick={handlePlayStorageAudio(gender)}
                className="clickable fas fa-volume-down px-1"
                title="play audio"
              />
            </span>
          ))}
      </div>
      <div>
        <ExtraEntryInfo entry={entry} textOptions={textOptions} />
        <dd>
          <div className="entry-definition">{entry.e}</div>
        </dd>
      </div>
    </div>
  );
}

export default Entry;
