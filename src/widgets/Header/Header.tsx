import { NavLink, useSearchParams } from 'react-router-dom';

export function Header() {
  const [searchParams] = useSearchParams();

  return (
    <div className="flex justify-between items-center p-4">
      <div className="neon-title">ASYNC RACE</div>
      <div className="flex gap-4">
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? 'nav-link-active' : ''}`
          }
          to={`/?${searchParams.toString()}`}
        >
          Garage
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? 'nav-link-active' : ''}`
          }
          to={`/winners?${searchParams.toString()}`}
        >
          Winners
        </NavLink>
      </div>
    </div>
  );
}
