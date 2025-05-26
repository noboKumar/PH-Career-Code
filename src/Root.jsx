import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <div>
      <nav>
        <NavBar></NavBar>
      </nav>
      <div className="min-h-screen w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
