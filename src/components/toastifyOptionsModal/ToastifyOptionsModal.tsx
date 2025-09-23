import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { ToastifyOptionTypes } from "../../enums/ToastifyOptionTypes";
import type { IToastifyOptionsModalProps } from "./interfaces/ToastifyOptionsModalPropsInterface";

export default function ToastifyOptionsModal({
  method,
  closeToast,
  message,
  type = ToastifyOptionTypes.Confirm,
}: IToastifyOptionsModalProps) {
  return (
    <div className="toastifyMainDiv">
      <div className="toastifyMessageDivs">
        {(type == ToastifyOptionTypes.MessageSuccess ||
          type == ToastifyOptionTypes.MessageError) && (
          <div className="toastifyIconMessage">
            <FontAwesomeIcon
              icon={
                type == ToastifyOptionTypes.MessageSuccess ? faCheck : faXmark
              }
              color={
                type == ToastifyOptionTypes.MessageSuccess ? "green" : "red"
              }
            />
          </div>
        )}
        <div>
          <span>{message}</span>
        </div>
      </div>

      <div className="toastifyButtonDivs">
        {type != ToastifyOptionTypes.Message &&
          type != ToastifyOptionTypes.MessageSuccess &&
          type != ToastifyOptionTypes.MessageError && (
            <button
              className="cancelToastifyButton"
              onClick={() => closeToast()}
            >
              Cancelar
            </button>
          )}
        {type == ToastifyOptionTypes.Confirm && (
          <button className="confirmToastifyButton" onClick={() => method()}>
            Confirmar
          </button>
        )}
        {type == ToastifyOptionTypes.Delete && (
          <button className="deleteToastifyButton" onClick={() => method()}>
            Excluir
          </button>
        )}
      </div>
    </div>
  );
}
