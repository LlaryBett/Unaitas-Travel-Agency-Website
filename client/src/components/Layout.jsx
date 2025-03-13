import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar /> {/* Navbar for About & Contact */}
      <div className="pt-16">
        <Outlet /> {/* Loads the page content dynamically */}
      </div>
    </>
  );
};

export default Layout;
