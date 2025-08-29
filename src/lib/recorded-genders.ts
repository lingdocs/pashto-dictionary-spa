import { Types as T } from "@lingdocs/pashto-inflector";

export function getRecordedGenders(entry: T.DictionaryEntry): T.Gender[] {
  return entry.a === 1
    ? ["masc"]
    : entry.a === 2
      ? ["fem"]
      : entry.a === 3
        ? ["masc", "fem"]
        : [];
}
