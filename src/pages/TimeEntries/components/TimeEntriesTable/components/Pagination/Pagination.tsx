import type { IPaginationProps } from "./interfaces/PaginationPropsInterface";

export default function Pagination({
  data,
  page,
  setPage,
  totalPages,
}: IPaginationProps) {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage((p: number) => Math.max(1, p - 1))}
        disabled={page === 1}
      >
        Anterior
      </button>
      <span>
        Página {data?.page ?? page} de {totalPages}
      </span>
      <button
        onClick={() => setPage((p: number) => Math.min(totalPages, p + 1))}
        disabled={page >= totalPages}
      >
        Próxima
      </button>
    </div>
  );
}
