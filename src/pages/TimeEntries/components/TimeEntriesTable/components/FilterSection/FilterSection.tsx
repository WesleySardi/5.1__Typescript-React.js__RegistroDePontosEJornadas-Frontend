import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { IFilterSectionProps } from "./interfaces/FilterSectionPropsInterface";
import FilterButton from "../../../../../../components/buttons/FilterButton/FilterButton";

export default function FilterSection({
  typeFilter,
  setTypeFilter,
  from,
  setFrom,
  to,
  setTo,
  setPage,
}: IFilterSectionProps) {
  return (
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

      <FilterButton method={() => setPage(1)} />
    </div>
  );
}
