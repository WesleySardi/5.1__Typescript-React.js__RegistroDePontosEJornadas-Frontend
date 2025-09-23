import { Route, Routes } from "react-router-dom";
import TimeEntryForm from "./components/TimeEntriesForm/TimeEntryForm";
import TimeEntriesTable from "./components/TimeEntriesTable/TimeEntriesTable";

export default function TimeEntries() {
  return (
    <Routes>
      <Route path="/" element={<TimeEntriesTable />} />
      <Route path="new" element={<TimeEntryForm />} />
      <Route path="edit/:id" element={<TimeEntryForm />} />
    </Routes>
  );
}
