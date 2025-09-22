import { api } from "../../../../../api";
import type { TimeEntry, TimeEntryCreateDTO } from "../../../../../types";

export async function getTimeEntry(id: string) {
  const res = await api.get<TimeEntry>(`/timeentries/${id}`);
  return res.data;
}

export async function createTimeEntry(payload: TimeEntryCreateDTO) {
  const res = await api.post<TimeEntry>("/timeentries", payload);
  return res.data;
}

export async function updateTimeEntry(id: string, payload: TimeEntryCreateDTO) {
  await api.put(`/timeentries/${id}`, payload);
}
