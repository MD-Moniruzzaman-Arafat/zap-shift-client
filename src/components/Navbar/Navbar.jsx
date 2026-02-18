import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import useAuth from '../../hooks/useAuth';
import Menu from './Menu';

export default function Navbar() {
  const { user, setUser, userLogOut } = useAuth();
  const handleLogOut = async () => {
    console.log('logout');
    await userLogOut();
    setUser(null);
  };
  console.log(user);
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm rounded-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Menu />
            </ul>
          </div>
          <Link to="/" className="flex items-center text-xl font-bold">
            <img src={logo} alt="" />
            <p>ZapShift</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Menu />
          </ul>
        </div>
        <div className="navbar-end gap-2 ">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <p onClick={handleLogOut}>Logout</p>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className="hidden lg:flex gap-1">
                <Link to={'/login'} className="btn rounded-xl px-5">
                  Sign In
                </Link>
                <Link
                  to={'/register'}
                  className="btn rounded-xl px-5 bg-[#CAEB66] text-black"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
