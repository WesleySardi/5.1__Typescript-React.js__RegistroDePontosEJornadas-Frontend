import "./styles.css";
import { useNavigate } from "react-router-dom";
import { deleteTimeEntry } from "../../helpers/services";
import EditButton from "../../../../../../components/buttons/EditButton/EditButton";
import DeleteButton from "../../../../../../components/buttons/DeleteButton/DeleteButton";
import type { TimeEntry } from "../../../../../../types";

export default function Table({ items }: { items: TimeEntry[] }) {
  const navigate = useNavigate();

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: TimeEntry) => (
            <tr key={item.id}>
              <td>{item.employeeId}</td>
              <td>{item.employeeName}</td>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
              <td>{item.type}</td>
              <td>
                <EditButton method={() => navigate(`/edit/${item.id}`)} />
                <span> | </span>
                <DeleteButton item={item} deleteMethod={deleteTimeEntry} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
