import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function CancelButton() {
  const navigate = useNavigate();

  return (
    <button
      className="cancelButton"
      type="button"
      onClick={() => navigate("/")}
    >
      <FontAwesomeIcon icon={faXmark} size="lg" />
    </button>
  );
}
