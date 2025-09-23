import "./styles.css";
import type { IFormFieldProps } from "./interfaces/FormFieldPropsInterface";

export default function FormField({
  label,
  children,
  className,
  error = null,
}: IFormFieldProps) {
  return (
    <div className={`${className ?? ""}`}>
      <div>
        <div>
          <label>{label}</label>
          {error && <span>{error.message}</span>}
        </div>

        {children}
      </div>
    </div>
  );
}
