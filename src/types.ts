export type TimeEntry = {
  id: string;
  employeeId: string;
  employeeName: string;
  timestamp: string;
  type: string;
  location?: string;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
};

export type TimeEntryCreateDTO = Omit<
  TimeEntry,
  "id" | "createdAt" | "updatedAt"
>;

export type TimeEntryListResponse = {
  items: TimeEntry[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type PagedResult<T> = {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
};
