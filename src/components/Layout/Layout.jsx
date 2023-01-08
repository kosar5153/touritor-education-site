import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../commen/Navbar/Navbar";
import Footer from "../commen/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  let navbar = <Navbar />;
  let footer = <Footer />;

  if (
    location.pathname === "/signup" ||
    location.pathname === "/forgetpass" ||
    location.pathname === "/login"
  ) {
    navbar = null;
    footer = null;
  } else {
    navbar = <Navbar />;
    footer = <Footer />;
  }
  return (
    <div>
      {navbar}
      <div>
        <Outlet />
      </div>
      {footer}
    </div>
  );
};

export default Layout;
