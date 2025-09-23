import "./styles.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FilterButton({ method }: { method: () => any }) {
  return (
    <button className="defaultButton filterButton" onClick={method}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
}
