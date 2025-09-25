import { Route, Routes } from "react-router-dom";
import TimeEntryForm from "./components/TimeEntriesForm/TimeEntryForm";
import TimeEntriesTable from "./components/TimeEntriesTable/TimeEntriesTable";

export default function TimeEntries() {
  return (
    <Routes>
      <Route path="/list" element={<TimeEntriesTable />} />
      <Route path="/list/new" element={<TimeEntryForm />} />
      <Route path="/list/edit/:id" element={<TimeEntryForm />} />
    </Routes>
  );
}
