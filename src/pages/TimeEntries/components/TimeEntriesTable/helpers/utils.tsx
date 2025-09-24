import { TimeEntriesTypes } from "../../../../../enums/TimeEntriesTypes";

export const TimeEntriesTypesReverse = Object.fromEntries(
  Object.entries(TimeEntriesTypes).map(([key, value]) => [value, key])
) as Record<number, string>;
