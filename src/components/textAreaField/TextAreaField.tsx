import type { ITextAreaFieldProps } from "./interfaces/TextAreaFieldPropsInterface";

export default function TextAreaField({
  label,
  placeholder,
  register,
  name,
  error,
  classNameDiv,
  classNameTextArea,
}: ITextAreaFieldProps) {
  return (
    <div className={`${classNameDiv ?? ""}`}>
      <div>
        <label>{label}</label>
        <textarea
          className={`${classNameTextArea ?? ""}`}
          placeholder={placeholder}
          {...register(name)}
        ></textarea>
      </div>
      {error && <span>{error.message}</span>}
    </div>
  );
}
