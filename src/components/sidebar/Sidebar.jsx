import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ open }) {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/manufacturers">Manufacturers</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
