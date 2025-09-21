import React from "react";
import "./styles.css";

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
  error?: any;
  className?: string;
};

export default function FormField({
  label,
  children,
  className,
  error = null,
}: FormFieldProps) {
  return (
    <div className={`${className ?? ""}`}>
      <div>
        <label>{label}</label>
        {children}
      </div>
      {error && <span>{error.message}</span>}
    </div>
  );
}
