import "./styles.css";
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
      Salvar
    </button>
  );
}
