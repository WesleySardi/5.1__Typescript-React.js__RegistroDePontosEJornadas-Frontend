import "./styles.css";
import CancelButton from "../../../../../../components/buttons/CancelButton/CancelButton";
import SaveOrCreateButton from "../../../../../../components/buttons/SaveOrCreateButton/SaveOrCreateButton";
import type { SaveOrCreateButtonProps } from "../../../../../../components/buttons/SaveOrCreateButton/interfaces/SaveOrCreateButtonPropsInterface";

export default function FormActions({
  createMut,
  updateMut,
}: SaveOrCreateButtonProps) {
  return (
    <div className="saveAndCancelDiv">
      <CancelButton />
      <SaveOrCreateButton {...{ createMut, updateMut }} />
    </div>
  );
}
