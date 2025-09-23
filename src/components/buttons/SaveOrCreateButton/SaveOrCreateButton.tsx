import "./styles.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SaveOrCreateButtonProps } from "./interfaces/SaveOrCreateButtonPropsInterface";

export default function SaveOrCreateButton({
  createMut,
  updateMut,
}: SaveOrCreateButtonProps) {
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
