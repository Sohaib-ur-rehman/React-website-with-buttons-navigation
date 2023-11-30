import React from "react";
import { NavLink } from "react-router-dom";

export default ({ toggleMenu }) => (
  <div className="sidemenu">
    <div className="card profile-card">
      <div className="card-body">
        <h4 className="card-title">GV HOMES</h4>
        <h6 className="card-subtitle mb-3 text-muted">Administrator</h6>
        <NavLink to="/" onClick={toggleMenu} className="card-link">
          Home
        </NavLink>
        <NavLink to="/logout" onClick={toggleMenu} className="card-link">
          Logout
        </NavLink>
      </div>
    </div>
    <NavLink className="link" to="/home" onClick={toggleMenu}>
      Control panel
    </NavLink>

    <NavLink className="link" to="/gvcam" onClick={toggleMenu}>
      View GV Cameras
    </NavLink>
    <NavLink className="link" to="/settemp" onClick={toggleMenu}>
      Set temperature
    </NavLink>
    <NavLink className="link" to="/setrout" onClick={toggleMenu}>
      Set routines
    </NavLink>

    <NavLink className="link" to="/gvlock" onClick={toggleMenu}>
      View GV locks
    </NavLink>
    <NavLink className="link" to="/support" onClick={toggleMenu}>
      Support
    </NavLink>

    <NavLink className="link" to="/groupmem" onClick={toggleMenu}>
      Group members
    </NavLink>
  </div>
);
