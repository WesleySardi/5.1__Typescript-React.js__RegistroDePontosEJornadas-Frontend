import { type Dispatch, type SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function FilterButton({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <button className="defaultButton filterButton" onClick={() => setPage(1)}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
}
