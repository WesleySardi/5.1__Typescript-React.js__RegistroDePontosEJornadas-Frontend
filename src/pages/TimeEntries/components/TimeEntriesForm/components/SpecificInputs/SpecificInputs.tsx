import "./styles.css";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import FormField from "../../../../../../components/formField/FormField";
import type { ITimeEntryFormData } from "../../interfaces/TimeEntryFormDataInterface";

export default function SpecificInputs({
  errors,
  register,
}: {
  register: UseFormRegister<ITimeEntryFormData>;
  errors: FieldErrors<ITimeEntryFormData>;
}) {
  return (
    <>
      <FormField
        label="Data"
        error={errors.timestamp}
        className="specificFormDivs"
      >
        <input
          placeholder="Selecione a data"
          className="dateInput"
          type="datetime-local"
          {...register("timestamp")}
        />
      </FormField>

      <FormField label="Tipo" error={errors.type} className="specificFormDivs">
        <select {...register("type")}>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
          <option value="Intervalo">Intervalo</option>
        </select>
      </FormField>
    </>
  );
}
