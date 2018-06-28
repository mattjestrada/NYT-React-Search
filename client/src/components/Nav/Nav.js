import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="navbar-brand" to="/">
          NYT-React
        </div>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/saved">Saved Articles</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
