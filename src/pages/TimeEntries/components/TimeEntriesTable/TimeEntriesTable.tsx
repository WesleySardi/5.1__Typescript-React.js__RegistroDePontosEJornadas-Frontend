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

  const { data, isLoading, isError } = useQuery<
    PagedResult<TimeEntry>,
    unknown,
    PagedResult<TimeEntry>
  >({
    queryKey: ["timeEntries", { page, pageSize, typeFilter, from, to }],
    queryFn: () =>
      getTimeEntries({
        page,
        pageSize,
        type: typeFilter,
        from: from ? new Date(from).toISOString() : undefined,
        to: to ? new Date(to).toISOString() : undefined,
      }),
  });

  const items: TimeEntry[] = data?.items ?? [];
  const totalPages: number = data?.totalPages ?? 1;

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
              setPage,
            }}
          />

          <Table {...{ items }} />

          <Pagination {...{ data, page, setPage, totalPages }} />
        </div>
      }
    />
  );
}
