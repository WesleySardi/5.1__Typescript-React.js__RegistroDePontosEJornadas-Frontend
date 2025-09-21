import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function EditButton({
  item,
  navigate,
}: {
  item: any;
  navigate: any;
}) {
  return (
    <button
      className="defaultButton buttonEdit"
      onClick={() => navigate(`/edit/${item.id}`)}
      title="Editar"
    >
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );
}
