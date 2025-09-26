export interface ITimeEntryFormData {
  employeeId: string;
  employeeName: string;
  timestamp: string;
  type: "Entrada" | "Saida" | "Intervalo";
  location?: string;
  notes?: string;
}
