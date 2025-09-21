// Tipo de um registro
export type TimeEntry = {
  id: string;
  employeeId: string;
  employeeName: string;
  timestamp: string; // DateTime convertido para ISO string
  type: "Entrada" | "Saída" | "Intervalo";
  location?: string;
  notes?: string;
  createdAt: string; // DateTime convertido para ISO string
  updatedAt?: string; // DateTime convertido para ISO string ou undefined
};

// DTO para criação/atualização
export type TimeEntryCreateDTO = Omit<
  TimeEntry,
  "id" | "createdAt" | "updatedAt"
>;

// Resultado paginado
export type TimeEntryListResponse = {
  items: TimeEntry[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
};
