import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function SaveOrCreateButton({
  createMut,
  updateMut,
}: {
  createMut: any;
  updateMut: any;
}) {
  return (
    <button
      className="saveButton"
      type="submit"
      disabled={createMut.isLoading || updateMut.isLoading}
    >
      <FontAwesomeIcon icon={faCheck} size="lg" />
    </button>
  );
}
