import "./styles.css";
import { Route, Routes } from "react-router-dom";
import TimeEntries from "../../../pages/TimeEntries/TimeEntries";

export default function Body() {
  return (
    <main className="main">
      <Routes>
        <Route path="/*" element={<TimeEntries />} />
      </Routes>
    </main>
  );
}
