import { Link, NavLink } from 'react-router';

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
      <div className="gap-2 lg:hidden flex py-5">
        <Link
          to={'/login'}
          className="btn rounded-xl px-5 py-0 text-xs font-light"
        >
          Sign In
        </Link>
        <Link
          to={'/register'}
          className="btn rounded-xl px-5 bg-[#CAEB66] text-black py-0 text-xs font-light"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
