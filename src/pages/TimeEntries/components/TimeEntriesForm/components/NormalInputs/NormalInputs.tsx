import "./styles.css";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import FormField from "../../../../../../components/formField/FormField";
import TextAreaField from "../../../../../../components/textAreaField/TextAreaField";
import type { ITimeEntryFormData } from "../../interfaces/TimeEntryFormDataInterface";

export default function NormalInputs({
  errors,
  register,
}: {
  register: UseFormRegister<ITimeEntryFormData>;
  errors: FieldErrors<ITimeEntryFormData>;
}) {
  return (
    <div className="firstDiv">
      <FormField
        label="Código"
        error={errors.employeeId}
        className={"mainFormDivs"}
      >
        <input
          placeholder="Digite o código do registro"
          className="normalInputs"
          maxLength={20}
          {...register("employeeId")}
        />
      </FormField>
      <FormField
        label="Nome"
        error={errors.employeeName}
        className="mainFormDivs"
      >
        <input
          placeholder="Digite o nome do registro"
          className="normalInputs"
          maxLength={70}
          {...register("employeeName")}
        />
      </FormField>
      <FormField label="Local (opcional)" className="mainFormDivs">
        <input
          placeholder="Digite o local do registro"
          className="normalInputs"
          maxLength={100}
          {...register("location")}
        />
      </FormField>
      <TextAreaField
        label="Observações (opcional)"
        placeholder="Digite suas observações"
        register={register}
        name="notes"
        error={errors.notes}
        classNameDiv={"mainFormDivs"}
        classNameTextArea={"defaultTextArea normalInputs"}
        maxLength={200}
      />
    </div>
  );
}
