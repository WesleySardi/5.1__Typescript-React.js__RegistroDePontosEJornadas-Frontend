export interface IFilterSectionProps {
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  from: string;
  setFrom: (value: string) => void;
  to: string;
  setTo: (value: string) => void;
  setPage: (page: number) => void;
}
