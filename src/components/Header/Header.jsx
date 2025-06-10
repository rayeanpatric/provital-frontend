import React, { useState } from "react";
import "./Header.scss";
import logo from "../images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="ProVital Logo" />
          <span className="header__logo-text">ProVital</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav desktop" aria-label="Main navigation">
          <ul>
            <li>
              <a href="/list-practice">List your practice</a>
            </li>
            <span className="nav-separator">|</span>
            <li>
              <a href="/for-employers">For Employers</a>
            </li>
            <span className="nav-separator">|</span>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <span className="nav-separator">|</span>
            <li>
              <a href="/books">Books</a>
            </li>
            <span className="nav-separator">|</span>
            <li>
              <a href="/speakers">Speakers</a>
            </li>
            <span className="nav-separator">|</span>
            <li>
              <a href="/doctors">Doctors</a>
            </li>
            <span className="nav-separator">|</span>
            {/* Desktop Auth */}
            <div className="header__auth desktop">
              <button
                className="btn-login"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                Login / Signup{" "}
                <span className="dropdown-arrow" aria-hidden="true">
                  ▼
                </span>
              </button>
              {isDropdownOpen && (
                <div className="header__dropdown">
                  <div className="dropdown-row">
                    <span className="user-type">Doctor</span>
                    <div className="dropdown-links">
                      <a href="/doctor/login">Login</a>
                      <a href="/doctor/signup">Sign up</a>
                    </div>
                  </div>
                  <div className="dropdown-row">
                    <span className="user-type">Patient</span>
                    <div className="dropdown-links">
                      <a href="/patient/login">Login</a>
                      <a href="/patient/signup">Sign up</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`header__menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`header__mobile-menu ${isMenuOpen ? "open" : ""}`}>
          {" "}
          <div className="mobile-menu__auth">
            <div className="auth-row">
              <span className="user-type">Doctor</span>
              <div className="auth-links">
                <a href="/doctor/login">Login</a>
                <a href="/doctor/signup">Sign up</a>
              </div>
            </div>
            <div className="auth-row">
              <span className="user-type">Patient</span>
              <div className="auth-links">
                <a href="/patient/login">Login</a>
                <a href="/patient/signup">Sign up</a>
              </div>
            </div>
          </div>
          <nav className="mobile-menu__nav">
            <ul>
              <li>
                <a href="/doctors">
                  Doctors
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="/list-practice">
                  List your practice
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="/for-employers">
                  For Employers
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="/courses">
                  Courses
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="/books">
                  Books
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="/speakers">
                  Speakers
                  <span className="arrow">→</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
