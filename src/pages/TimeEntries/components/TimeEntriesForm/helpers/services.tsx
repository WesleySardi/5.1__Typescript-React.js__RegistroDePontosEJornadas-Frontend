import { api } from "../../../../../api";
import type { TimeEntry, TimeEntryCreateDTO } from "../../../../../types";
import { handleApiRequest } from "../../../../../utils/utils";

export async function getTimeEntry(id: string) {
  return handleApiRequest(() =>
    api.get<TimeEntry>(`/timeentries/${id}`).then((res) => res.data)
  );
}

export async function createTimeEntry(payload: TimeEntryCreateDTO) {
  return handleApiRequest(
    () => api.post<TimeEntry>("/timeentries", payload).then((res) => res.data),
    "Registro criado com sucesso!"
  );
}

export async function updateTimeEntry(id: string, payload: TimeEntryCreateDTO) {
  return handleApiRequest(
    () => api.put(`/timeentries/${id}`, payload),
    "Registro atualizado com sucesso!"
  );
}
