import React from "react";
import { NavLink } from "react-router-dom";

export default ({ toggleMenu, toggleSearch }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <i
      className="fas fa-bars fa-lg sidemenu-toggle-icon"
      onClick={toggleMenu}
    ></i>
    <NavLink className="navbar-brand" to="/">
      GV Homes
    </NavLink>
    <ul className="navbar-nav">
      <li className="nav-item"></li>
    </ul>
  </nav>
);
