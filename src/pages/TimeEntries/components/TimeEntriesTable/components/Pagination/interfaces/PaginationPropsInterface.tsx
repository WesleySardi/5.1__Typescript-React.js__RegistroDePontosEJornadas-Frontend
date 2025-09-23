export interface IPaginationProps {
  data?: { page?: number };
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}
