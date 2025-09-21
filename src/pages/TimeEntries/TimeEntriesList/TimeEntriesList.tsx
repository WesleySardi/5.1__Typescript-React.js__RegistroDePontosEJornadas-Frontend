import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { TimeEntry } from "../../../types";
import FilterButton from "../../../components/buttons/FilterButton/FilterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

import { useNavigate } from "react-router-dom";
import DeleteButton from "../../../components/buttons/DeleteButton/DeleteButton";
import EditButton from "../../../components/buttons/EditButton/EditButton";
import { deleteTimeEntry, getTimeEntries } from "./helpers/services";
import LoadingOrErrorInfo from "../../../components/loadingOrError/LoadingOrErrorInfo";

export default function TimeEntriesList() {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [typeFilter, setTypeFilter] = useState<string | undefined>(undefined);
  const [from, setFrom] = useState<string | undefined>(undefined);
  const [to, setTo] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["timeEntries", { page, pageSize, typeFilter, from, to }],
    queryFn: () =>
      getTimeEntries({
        page,
        pageSize,
        type: typeFilter,
        from: from ? new Date(from).toISOString() : undefined,
        to: to ? new Date(to).toISOString() : undefined,
      }),
    keepPreviousData: true,
  });

  const items: TimeEntry[] = data?.items ?? [];
  const totalPages = data?.totalPages ?? 1;

  return (
    <LoadingOrErrorInfo
      isLoading={isLoading}
      isError={isError}
      component={
        <div className="time-entries">
          <h2>Registros de ponto:</h2>

          <div className="filters">
            <label>
              <select
                className="typeFilterSelect"
                value={typeFilter ?? ""}
                onChange={(e) => setTypeFilter(e.target.value || undefined)}
              >
                <option value="">Todos</option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
                <option value="Intervalo">Intervalo</option>
              </select>
            </label>

            <div>
              <label>
                <input
                  className="dateFilterInput"
                  type="date"
                  value={from ?? ""}
                  onChange={(e) => setFrom(e.target.value || undefined)}
                />
              </label>
              <FontAwesomeIcon icon={faArrowRight} size="2xs" color="grey" />
              <label>
                <input
                  className="dateFilterInput"
                  type="date"
                  value={to ?? ""}
                  onChange={(e) => setTo(e.target.value || undefined)}
                />
              </label>
            </div>

            <FilterButton setPage={setPage} />
          </div>

          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>Data</th>
                  <th>Tipo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.employeeId}</td>
                    <td>{item.employeeName}</td>
                    <td>{new Date(item.timestamp).toLocaleString()}</td>
                    <td>{item.type}</td>
                    <td>
                      <EditButton item={item} navigate={navigate} />
                      <span> | </span>
                      <DeleteButton
                        item={item}
                        deleteMethod={deleteTimeEntry}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Anterior
            </button>
            <span>
              Página {data?.page ?? page} de {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
            >
              Próxima
            </button>
          </div>
        </div>
      }
    />
  );
}
