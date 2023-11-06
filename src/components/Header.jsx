import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="taskbar">
      <ul className="box">
        <li className="li">
          <NavLink className="navText" to="/">
            Home
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="navText" to="/aboutus">
            About
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="navText" to="/allcomplaints">
            Complaints
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="navText" to="/complaint">
            Create
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="navText" to="/loginsingup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
