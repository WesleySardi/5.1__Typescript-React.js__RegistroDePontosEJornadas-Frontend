import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function CancelButton() {
  const navigate = useNavigate();

  return (
    <button
      className="cancelButton"
      type="button"
      onClick={() => navigate("/")}
    >
      Cancelar
    </button>
  );
}
