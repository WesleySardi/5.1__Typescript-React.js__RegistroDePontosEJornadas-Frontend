import "./styles.css";
import { Route, Routes } from "react-router-dom";
import TimeEntries from "../../../pages/TimeEntries/TimeEntries";
import WelcomeComponent from "../../../pages/Welcome/WelcomeComponent";

export default function Body() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<WelcomeComponent />} />
        <Route path="/timeEntries*" element={<TimeEntries />} />
      </Routes>
    </main>
  );
}
