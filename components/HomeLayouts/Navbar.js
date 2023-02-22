import React from "react";
import Link from "next/link";
import styles from '../../styles/Home.module.css'
 
function Navbar() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img
              src="img/smart-agric-logo.png"
              width={120}
              alt="logo"
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-menu" />
          </button>
          <div
            className="collapse navbar-collapse main-menu justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link page-scroll" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-scroll" href="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-scroll" href="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-scroll" href="#">
                  Screenshots
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-scroll" href="#">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-scroll" href="/contact-us">
                  Contact Us
                </Link>
              </li>
              <div className="download-btn">
                <Link href="/login" className={`btn ${styles.googleplaybtn} me-3 `}>
                  Login
                </Link>
              </div>
              <div className="download-btn">
                <Link href="/register" className={`btn ${styles.appstorebtn} `}>
                  Sign Up
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
