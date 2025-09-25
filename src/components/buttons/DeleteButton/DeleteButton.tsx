import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastifyOptionTypes } from "../../../enums/ToastifyOptionTypes";
import ToastifyOptionsModal from "../../toastifyOptionsModal/ToastifyOptionsModal";

export default function DeleteButton({
  item,
  deleteMethod,
}: {
  item: any;
  deleteMethod: (id: string) => Promise<any>;
}) {
  const queryClient = useQueryClient();

  const del = useMutation({
    mutationFn: (id: string) => deleteMethod(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["timeEntries"] });
    },
    onError: () => {},
  });

  function handleDelete(id: string) {
    toast(
      ({ closeToast }) => (
        <ToastifyOptionsModal
          message="Tem certeza que deseja excluir este item?"
          type={ToastifyOptionTypes.Delete}
          method={() => {
            del.mutate(id);
            closeToast?.();
          }}
          closeToast={closeToast}
        />
      ),
      { autoClose: false }
    );
  }

  return (
    <button
      className="defaultButton buttonDelete"
      onClick={() => handleDelete(item.id)}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
