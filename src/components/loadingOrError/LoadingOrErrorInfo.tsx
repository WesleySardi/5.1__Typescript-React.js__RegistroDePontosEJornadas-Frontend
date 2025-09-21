import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function LoadingOrErrorInfo({
  isLoading,
  isError,
  component,
}: {
  isLoading: boolean;
  isError: boolean;
  component: React.ReactNode;
}) {
  return (
    <>
      {isLoading || isError ? (
        <>
          {isLoading && (
            <div className="div-error">
              <FontAwesomeIcon
                className="spinning"
                icon={faSpinner}
                size="5x"
              />
              <span>Carregando...</span>
            </div>
          )}
          {isError && (
            <div className="div-error">
              <FontAwesomeIcon icon={faXmark} size="5x" />
              <span>Erro ao carregar registros.</span>
            </div>
          )}
        </>
      ) : (
        <>{component}</>
      )}
    </>
  );
}
