export interface ITimeEntryFormData {
  employeeId: string;
  employeeName: string;
  timestamp: string;
  type: "Entrada" | "Saída" | "Intervalo";
  location?: string;
  notes?: string;
}
