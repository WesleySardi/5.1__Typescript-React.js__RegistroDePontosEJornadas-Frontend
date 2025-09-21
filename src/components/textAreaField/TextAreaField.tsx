type TextAreaFieldProps = {
  label: string;
  placeholder?: string;
  register: any;
  name: string;
  error?: any;
  classNameDiv: string;
  classNameTextArea: string;
};

export default function TextAreaField({
  label,
  placeholder,
  register,
  name,
  error,
  classNameDiv,
  classNameTextArea,
}: TextAreaFieldProps) {
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
