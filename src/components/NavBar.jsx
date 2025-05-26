import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
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
    <div className="bg-base-100 shadow-sm py-4">
      <div className="navbar w-11/12 mx-auto">
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
          <a className="btn btn-ghost text-xl">Career Code</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] space-x-10 items-center">{navBarLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="space-x-5">
            <Link className="underline">Register</Link>
            <Link className="btn btn-primary">Sign IN</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
