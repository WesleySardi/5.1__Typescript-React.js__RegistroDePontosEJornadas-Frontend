import type { ITextAreaFieldProps } from "./interfaces/TextAreaFieldPropsInterface";

export default function TextAreaField({
  label,
  placeholder,
  register,
  name,
  error,
  classNameDiv,
  classNameTextArea,
  maxLength = 50,
}: ITextAreaFieldProps) {
  return (
    <div className={`${classNameDiv ?? ""}`}>
      <div>
        <label>{label}</label>
        <textarea
          className={`${classNameTextArea ?? ""}`}
          placeholder={placeholder}
          maxLength={maxLength}
          {...register(name)}
        ></textarea>
      </div>
      {error && <span>{error.message}</span>}
    </div>
  );
}
