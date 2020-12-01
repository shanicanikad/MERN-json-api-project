import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        <div className="navbar-collapse" id="navbarNav1">
          <ul className="navbar-nav">
            <button className="nav-item active">
              <Link to="/">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </button>
            <button className="nav-item">
              <Link to="/update">
                <a className="nav-link" href="#">
                  Update
                </a>
              </Link>
            </button>
            <button className="nav-item">
              <Link to="/delete">
                <a className="nav-link" href="#">
                 Delete
                </a>
              </Link>
            </button>
            <button className="nav-item">
              <Link to="/createshow">
                <a className="nav-link" href="#">
                  Create Show
                </a>
              </Link>
            </button>
          </ul>
        </div>
      </nav>
      <div></div>
    </div>
  );
}

export default Navbar;
