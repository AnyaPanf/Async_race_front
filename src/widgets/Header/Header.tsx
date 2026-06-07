import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="neon-title">ASYNC RACE</div>
      <div className="flex gap-4">
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
          to="/"
        >
          Race
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""}`
          }
          to="/winners"
        >
          Winners
        </NavLink>
      </div>
    </div>
  );
};
