/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
  <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h2 className="m-0 main">
      <i className="fa fa-book me-3"></i>eLEARNING
    </h2>
  </a>
  <button
    type="button"
    className="navbar-toggler me-4" 
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
    aria-controls="navbarCollapse"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
      <NavLink to="/LMS-Web" className="nav-item nav-link active">
        Home
      </NavLink>
      <NavLink to="/About" className="nav-item nav-link">
        About
      </NavLink>
      <NavLink to="/Courses" className="nav-item nav-link">
        Courses
      </NavLink>
      <NavLink to="/Contact" className="nav-item nav-link">
        Contact
      </NavLink>
    </div>
  </div>
</nav>

            {/* <!-- Navbar End --> */}
        </div>
    )
}

export default Header
