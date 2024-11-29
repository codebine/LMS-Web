/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            {/* <header className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="site-logo">
                                <img src="img/logo.png" alt="" />
                            </div>
                            <div className="nav-switch">
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <a href="" className="site-btn header-btn">Login</a>
                            <nav className="main-menu">
                                <ul>
                                    <li><a><NavLink to="/">Home</NavLink> </a></li>
                                    <li><a> <NavLink to="/About">About us</NavLink></a></li>
                                    <li><a><NavLink to="/Courses">Courses</NavLink></a></li>
                                    <li><a>News</a></li>
                                    <li><a><NavLink to="/Contact">Contact</NavLink></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header> */}
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a className="nav-item nav-link active"><NavLink to="/">Home</NavLink></a>
                        <a className="nav-item nav-link"><NavLink to="/About">About</NavLink></a>
                        <a className="nav-item nav-link"><NavLink to="/Courses">Courses</NavLink></a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu fade-down m-0">
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a className="nav-item nav-link"><NavLink to="/Contact">Contact</NavLink></a>
                    </div>
                    <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </div>
    )
}

export default Header
