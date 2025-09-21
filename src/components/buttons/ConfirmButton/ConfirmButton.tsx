import React from "react";
import "./styles.css";

export default function ConfirmButton({
  children,
  onConfirm,
}: {
  children: React.ReactNode;
  onConfirm: () => void;
}) {
  return (
    <button
      onClick={() => {
        if (confirm("Confirma?")) onConfirm();
      }}
    >
      {children}
    </button>
  );
}
