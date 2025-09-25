import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div>
        <img
          src="/bmasistemas_logo.jpg"
          alt="Logo BMA Sistemas"
          className="logo"
        />
        <h1>BMA - Time Entries</h1>
      </div>
      <nav>
        <Link to="/timeEntries/list">Lista</Link>
        <span> | </span>
        <Link to="/timeEntries/list/new">Novo</Link>
      </nav>
    </header>
  );
}
