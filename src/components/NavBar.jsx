import React, { useContext } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOutUser = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const navBarLinks = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"/allJobs"}>
        <li>All Jobs</li>
      </NavLink>
      <NavLink to={"/jobDetails"}>
        <li>Job Details</li>
      </NavLink>
      <NavLink to={"/addJobs"}>
        <li>Add Jobs</li>
      </NavLink>
      <NavLink to={"/applicationPage"}>
        <li>Application Page</li>
      </NavLink>
      <NavLink to={"/myApplication"}>
        <li>My Applications</li>
      </NavLink>
      <NavLink to={"/myJobPost"}>
        <li>My Job post</li>
      </NavLink>
      <NavLink to={"/reviewApplication"}>
        <li>Review Application</li>
      </NavLink>
      <NavLink to={"/updateJob"}>
        <li>Update Job</li>
      </NavLink>
    </>
  );
  return (
    <div className="bg-base-100 py-4 shadow-sm">
      <div className="navbar mx-auto w-11/12">
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
              {navBarLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <FaLaptopCode size={40} />
            Career Code
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center space-x-10 px-1 text-[16px]">
            {navBarLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="space-x-5">
            {user ? (
              <button onClick={handleLogOutUser} className="btn btn-primary">
                Sign Out
              </button>
            ) : (
              <>
                <Link className="underline" to={"/register"}>
                  Register
                </Link>
                <Link className="btn btn-primary" to={"/login"}>
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
