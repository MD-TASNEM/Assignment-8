import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
const Nave = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="hover:underline decoration-2 decoration-indigo-500 font-bold">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:underline decoration-2 decoration-indigo-500 font-bold">
              <NavLink to="/AllApps">Apps</NavLink>
            </li>
            <li className="hover:underline decoration-2 decoration-indigo-500 font-bold">
              <NavLink to="/MyInstallation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex font-bold text-xl">
          <img src="/logo.png" alt="Logo" className="h-9 " />
          my-apps
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1">
          <li className="hover:underline decoration-2 decoration-indigo-500 font-bold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:underline decoration-2 decoration-indigo-500 font-bold">
            <NavLink to="/AllApps">Apps</NavLink>
          </li>
          <li className="hover:underline decoration-2 decoration-indigo-500 font-bold">
            <NavLink to="/MyInstallation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">

        <NavLink
          to="https://github.com/MD-TASNEM/Assignment-8"
          className=" bg-gradient-to-r from-indigo-500 to-[#9F62F2]  p-2 rounded hover:-bg-linear-60 font-bold flex items-center text-white"
        ><FaGithub className="text-2xl mr-4" />

          <p>Contribute</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Nave;
