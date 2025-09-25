import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function WelcomeButton() {
  const navigate = useNavigate();

  return (
    <button
      className="welcomeButton"
      onClick={() => navigate("/timeEntries/list")}
    >
      Visualizar registros
    </button>
  );
}
