/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 main"><i className="fa fa-book me-3"></i>eLEARNING</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a className="nav-item nav-link active"><NavLink to="/">Home</NavLink></a>
                        <a className="nav-item nav-link"><NavLink to="/About">About</NavLink></a>
                        <a className="nav-item nav-link"><NavLink to="/Courses">Courses</NavLink></a>
                        <a className="nav-item nav-link"><NavLink to="/Contact">Contact</NavLink></a>
                    </div>
                </div>
            </nav>
            {/* <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <a className="logo d-flex align-items-center me-auto me-lg-0">
                        <h1 className="sitename">GP</h1>
                        <span>.</span>
                    </a>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li>
                                <NavLink to="/" className="nav-item nav-link active">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/About" className="nav-item nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Courses" className="nav-item nav-link">
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" className="nav-item nav-link">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>


                    <a className="btn-getstarted" href="index.html#about">
                        Get Started
                    </a>
                </div>
            </header> */}
            {/* <!-- Navbar End --> */}
        </div>
    )
}

export default Header
