import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./styles.css";

export default function DeleteButton({
  item,
  deleteMethod,
}: {
  item: any;
  deleteMethod: any;
}) {
  const queryClient = useQueryClient();

  const del = useMutation({
    mutationFn: (id: string) => deleteMethod(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["timeEntries"] }),
  });

  function handleDelete(id: string) {
    if (confirm("Deseja excluir este registro?")) {
      del.mutate(id);
    }
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
