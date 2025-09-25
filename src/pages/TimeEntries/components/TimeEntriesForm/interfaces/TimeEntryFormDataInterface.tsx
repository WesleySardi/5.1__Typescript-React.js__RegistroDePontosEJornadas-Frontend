export interface ITimeEntryFormData {
  employeeId: string;
  employeeName: string;
  timestamp: string;
  type: "1" | "2" | "3";
  location?: string;
  notes?: string;
}
