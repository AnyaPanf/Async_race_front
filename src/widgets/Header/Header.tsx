import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="neon-title">ASYNC RACE</div>
      <div className="flex gap-4">
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? 'nav-link-active' : ''}`
          }
          to="/"
        >
          Garage
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? 'nav-link-active' : ''}`
          }
          to="/winners"
        >
          Winners
        </NavLink>
      </div>
    </div>
  );
}
