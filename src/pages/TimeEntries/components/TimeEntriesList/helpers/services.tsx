import { api } from "../../../../../api";
import type { TimeEntryListResponse } from "../../../../../types";

export async function getTimeEntries(params?: Record<string, any>) {
  const res = await api.get<TimeEntryListResponse>("/timeentries", { params });
  return res.data;
}

export async function deleteTimeEntry(id: string) {
  await api.delete(`/timeentries/${id}`);
}
