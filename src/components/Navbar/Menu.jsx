import { NavLink } from 'react-router';

export default function Menu() {
  return (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'bg-[#CAEB66]' : '')}
          to="/service"
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'bg-[#CAEB66]' : '')}
          to="/coverage"
        >
          Coverage
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'bg-[#CAEB66]' : '')}
          to="/about-us"
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'bg-[#CAEB66]' : '')}
          to="/pricing"
        >
          Pricing
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'bg-[#CAEB66]' : '')}
          to="/be-a-rider"
        >
          Be a Rider
        </NavLink>
      </li>
    </>
  );
}
