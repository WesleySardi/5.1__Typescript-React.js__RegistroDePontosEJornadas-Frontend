import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function EditButton({ method }: { method: () => any }) {
  return (
    <button
      className="defaultButton buttonEdit"
      onClick={method}
      title="Editar"
    >
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );
}
