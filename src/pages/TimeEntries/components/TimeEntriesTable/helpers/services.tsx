import { api } from "../../../../../api";
import type { TimeEntryListResponse } from "../../../../../types";
import { handleApiRequest } from "../../../../../utils/utils";

export async function getTimeEntries(params?: Record<string, any>) {
  return handleApiRequest(() =>
    api
      .get<TimeEntryListResponse>("/timeentries", { params })
      .then((res) => res.data)
  );
}

export async function deleteTimeEntry(id: string) {
  return handleApiRequest(
    () => api.delete(`/timeentries/${id}`),
    "Registro deletado com sucesso!"
  );
}
