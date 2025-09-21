import "./styles.css";
import CancelButton from "../../../../../components/buttons/CancelButton/CancelButton";
import SaveOrCreateButton from "../../../../../components/buttons/SaveOrCreateButton/SaveOrCreateButton";

export default function TimeEntryFormActions({
  createMut,
  updateMut,
}: {
  createMut: any;
  updateMut: any;
}) {
  return (
    <div className="saveAndCancelDiv">
      <CancelButton />
      <SaveOrCreateButton {...{ createMut, updateMut }} />
    </div>
  );
}
