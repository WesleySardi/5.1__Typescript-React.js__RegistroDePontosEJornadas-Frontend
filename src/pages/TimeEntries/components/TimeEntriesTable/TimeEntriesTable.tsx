import "./styles.css";
import { useState } from "react";
import Table from "./components/Table/Table";
import { useQuery } from "@tanstack/react-query";
import type { PagedResult, TimeEntry } from "../../../../types";
import { getTimeEntries } from "./helpers/services";
import Pagination from "./components/Pagination/Pagination";
import FilterSection from "./components/FilterSection/FilterSection";
import LoadingOrErrorInfo from "../../../../components/loadingOrError/LoadingOrErrorInfo";

export default function TimeEntriesTable() {
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const [filters, setFilters] = useState({
    type: "",
    from: "",
    to: "",
  });

  const { data, isLoading, isError, refetch } = useQuery<
    PagedResult<TimeEntry>,
    unknown,
    PagedResult<TimeEntry>
  >({
    queryKey: ["timeEntries", { page, pageSize, filters }],
    queryFn: () =>
      getTimeEntries({
        page,
        pageSize,
        type: filters.type || undefined,
        from: filters.from ? new Date(filters.from) : undefined,
        to: filters.to ? new Date(filters.to) : undefined,
      }),
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const items: TimeEntry[] = data?.items ?? [];
  const totalPages: number = data?.totalPages ?? 1;

  const handleSearch = () => {
    setFilters({
      type: typeFilter,
      from: from,
      to: to,
    });
    setPage(1);
    refetch();
  };

  return (
    <LoadingOrErrorInfo
      isLoading={isLoading}
      isError={isError}
      component={
        <div className="time-entries">
          <h2>Registros de ponto:</h2>

          <FilterSection
            {...{
              typeFilter,
              setTypeFilter,
              from,
              setFrom,
              to,
              setTo,
            }}
            onSearch={handleSearch}
          />

          <Table {...{ items }} />

          <Pagination {...{ data, page, setPage, totalPages }} />
        </div>
      }
    />
  );
}
