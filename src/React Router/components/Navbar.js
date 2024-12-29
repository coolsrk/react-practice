import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  {
    /**
     * !! argument should be inside {} if we are using a callback function
     * inside className.
     */
  }
  const getClassName = ({ isActive }) => (isActive ? "active-tab" : "");

  return (
    <div>
      <ul className="navbar">
        {/**
         * We can use Link instead of NavLink, but NavLink is used to style the active link.
         * We can use activeClassName to style the active link only with NavLink.
         */}
        <NavLink to="/" className={getClassName}>
          Home
        </NavLink>

        <NavLink to="/about" className={getClassName}>
          About
        </NavLink>

        <NavLink to="/contact" className={getClassName}>
          Contact
        </NavLink>

        <NavLink to="/dashboard" className={getClassName}>
          Dashboard
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
