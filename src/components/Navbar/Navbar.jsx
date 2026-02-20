// import { Link } from 'react-router';
// import logo from '../../assets/logo.png';
// import useAuth from '../../hooks/useAuth';
// import Menu from './Menu';

// export default function Navbar() {
//   const { user, setUser, userLogOut } = useAuth();
//   const handleLogOut = async () => {
//     console.log('logout');
//     await userLogOut();
//     setUser(null);
//   };
//   console.log(user);
//   return (
//     <>
//       <div className="navbar bg-base-100 shadow-sm rounded-2xl">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {' '}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{' '}
//               </svg>
//             </div>
//             <ul
//               tabIndex="-1"
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               <Menu />
//             </ul>
//           </div>
//           <Link to="/" className="flex items-center text-xl font-bold">
//             <img src={logo} alt="" />
//             <p>ZapShift</p>
//           </Link>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <Menu />
//           </ul>
//         </div>
//         <div className="navbar-end gap-2 ">
//           {user ? (
//             <div className="dropdown dropdown-end">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle avatar"
//               >
//                 <div className="w-10 rounded-full">
//                   <img
//                     alt="Tailwind CSS Navbar component"
//                     src={user?.photoURL}
//                   />
//                 </div>
//               </div>
//               <ul
//                 tabIndex="-1"
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//               >
//                 <li>
//                   <a className="justify-between">
//                     Profile
//                     <span className="badge">New</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a>{user?.displayName}</a>
//                 </li>
//                 <li>
//                   <p onClick={handleLogOut}>Logout</p>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <>
//               <div className="hidden lg:flex gap-1">
//                 <Link to={'/login'} className="btn rounded-xl px-5">
//                   Sign In
//                 </Link>
//                 <Link
//                   to={'/register'}
//                   className="btn rounded-xl px-5 bg-[#CAEB66] text-black"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';

const navLinks = [
  { to: '/service', label: 'Services' },
  { to: '/coverage', label: 'Coverage' },
  { to: '/about-us', label: 'About Us' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/be-a-rider', label: 'Be a Rider' },
  { to: '/send-parcel', label: 'Send Parcel' },
  { to: '/dash-board', label: 'Dashboard' },
];

export default function Navbar() {
  const { user, setUser, userLogOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogOut = async () => {
    await userLogOut();
    setUser(null);
    setDropOpen(false);
  };

  return (
    <nav
      className={`sticky top-3 z-50 mx-4 rounded-2xl border border-white/10 transition-all duration-300
        bg-black/80 backdrop-blur-xl
        ${
          scrolled
            ? 'shadow-[0_0_0_1px_rgba(202,235,102,0.15),0_16px_60px_rgba(0,0,0,0.7)]'
            : 'shadow-[0_0_0_1px_rgba(202,235,102,0.07),0_8px_40px_rgba(0,0,0,0.5)]'
        }`}
    >
      {/* ─── Main row ─────────────────────────────── */}
      <div className="flex items-center justify-between px-5 h-16">
        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-[5px] p-2 rounded-xl hover:bg-white/5 transition-colors"
        >
          <span
            className={`block w-5 h-0.5 rounded bg-white/75 transition-all duration-300
            ${menuOpen ? 'translate-y-[7px] rotate-45 bg-[#CAEB66]' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 rounded bg-white/75 transition-opacity duration-300
            ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 rounded bg-white/75 transition-all duration-300
            ${menuOpen ? '-translate-y-[7px] -rotate-45 bg-[#CAEB66]' : ''}`}
          />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <div
            className="w-9 h-9 rounded-xl bg-[#CAEB66] flex items-center justify-center text-lg flex-shrink-0
            shadow-[0_0_18px_rgba(202,235,102,0.35)]
            group-hover:rotate-[-8deg] group-hover:scale-110
            group-hover:shadow-[0_0_28px_rgba(202,235,102,0.6)]
            transition-all duration-300"
          >
            ⚡
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Zap<span className="text-[#CAEB66]">Shift</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 no-underline
                  ${
                    isActive
                      ? 'bg-[#CAEB66] text-black font-semibold'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side — auth or avatar */}
        <div className="flex items-center gap-2.5">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropOpen((v) => !v)}
                className="w-10 h-10 rounded-full border-2 border-[#CAEB66] overflow-hidden p-0 cursor-pointer
                  shadow-[0_0_12px_rgba(202,235,102,0.25)]
                  hover:shadow-[0_0_22px_rgba(202,235,102,0.5)] hover:scale-105
                  transition-all duration-200"
              >
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-full h-full object-cover"
                />
              </button>

              {dropOpen && (
                <div
                  className="absolute top-[calc(100%+10px)] right-0 min-w-[190px]
                  bg-[rgba(12,12,12,0.97)] backdrop-blur-2xl
                  border border-white/10 rounded-2xl overflow-hidden p-1.5
                  shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                  style={{ animation: 'dropIn .18s ease' }}
                >
                  <p className="px-3 pt-2 pb-1 text-[0.72rem] text-white/35 uppercase tracking-widest font-semibold">
                    {user?.displayName}
                  </p>

                  <hr className="border-white/10 my-1" />

                  <Link
                    to="/profile"
                    onClick={() => setDropOpen(false)}
                    className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl
                      text-white/70 text-sm hover:bg-white/5 hover:text-white
                      transition-colors no-underline"
                  >
                    👤 Profile
                  </Link>

                  <Link
                    to="/dash-board"
                    onClick={() => setDropOpen(false)}
                    className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl
                      text-white/70 text-sm hover:bg-white/5 hover:text-white
                      transition-colors no-underline"
                  >
                    🗂 Dashboard
                  </Link>

                  <hr className="border-white/10 my-1" />

                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl
                      text-white/70 text-sm bg-transparent border-none cursor-pointer text-left
                      hover:bg-red-500/10 hover:text-red-400
                      transition-colors"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/login"
                className="px-5 py-2 rounded-xl border border-white/10 bg-transparent
                  text-white/75 text-sm font-medium
                  hover:border-white/30 hover:text-white hover:bg-white/5
                  transition-all duration-200 no-underline"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 rounded-xl bg-[#CAEB66] text-black text-sm font-bold
                  hover:-translate-y-0.5 hover:scale-[1.03]
                  hover:shadow-[0_6px_22px_rgba(202,235,102,0.45)]
                  active:translate-y-0 active:scale-[0.99]
                  transition-all duration-200 no-underline"
              >
                Sign Up →
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* ─── Mobile drawer ────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? 'max-h-[600px] border-t border-white/10 pb-4' : 'max-h-0'}`}
      >
        <ul className="flex flex-col gap-0.5 list-none m-0 px-3.5 pt-2.5">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-150 no-underline
                  ${
                    isActive
                      ? 'bg-[#CAEB66] text-black font-bold'
                      : 'text-white/65 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {!user && (
          <div className="flex gap-2 px-3.5 pt-3">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center px-4 py-2.5 rounded-xl border border-white/10
                text-white/75 text-sm font-medium
                hover:bg-white/5 hover:text-white transition-colors no-underline"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center px-4 py-2.5 rounded-xl
                bg-[#CAEB66] text-black text-sm font-bold
                hover:brightness-105 transition-all no-underline"
            >
              Sign Up →
            </Link>
          </div>
        )}
      </div>

      {/* Dropdown keyframe */}
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: scale(.93) translateY(-6px); }
          to   { opacity: 1; transform: scale(1)   translateY(0);    }
        }
      `}</style>
    </nav>
  );
}
