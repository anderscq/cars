import "./Sidebar.css";

function Sidebar({ open, onClose }) {
  return (
    <nav className={`sidebar ${open ? "open" : ""}`}>
      <ul>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Montadoras</a>
        </li>
        <li>
          <a href="#">Carros</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
