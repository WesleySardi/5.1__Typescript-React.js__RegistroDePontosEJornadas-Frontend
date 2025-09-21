import { Routes, Route } from "react-router-dom";
import TimeEntriesList from "../../../pages/TimeEntries/TimeEntriesList/TimeEntriesList";
import TimeEntryForm from "../../../pages/TimeEntries/TimeEntriesForm/TimeEntryForm";

export default function Body() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<TimeEntriesList />} />
        <Route path="/new" element={<TimeEntryForm />} />
        <Route path="/edit/:id" element={<TimeEntryForm />} />
      </Routes>
    </main>
  );
}
