import { Route, Routes } from "react-router-dom";
import TimeEntriesList from "./components/TimeEntriesList/TimeEntriesList";
import TimeEntryForm from "./components/TimeEntriesForm/TimeEntryForm";

export default function TimeEntries() {
  return (
    <Routes>
      <Route path="/" element={<TimeEntriesList />} />
      <Route path="new" element={<TimeEntryForm />} />
      <Route path="edit/:id" element={<TimeEntryForm />} />
    </Routes>
  );
}
