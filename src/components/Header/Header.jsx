import React from "react";
import "./Header.scss";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="ProVital Logo" />
        </div>
        <nav className="header__nav" aria-label="Main navigation">
          <ul>
            <li>
              <a href="/list-practice" aria-label="List your medical practice">
                List your practice
              </a>
            </li>
            <li>
              <a href="/for-employers" aria-label="Information for employers">
                For Employers
              </a>
            </li>
            <li>
              <a href="/courses" aria-label="Browse medical courses">
                Courses
              </a>
            </li>
            <li>
              <a href="/books" aria-label="Browse medical books">
                Books
              </a>
            </li>
            <li>
              <a href="/speakers" aria-label="Find medical speakers">
                Speakers
              </a>
            </li>
            <li>
              <a href="/doctors" aria-label="Find doctors">
                Doctors
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__auth">
          <button className="btn-login" aria-label="Log in to your account">
            Login
          </button>
          <button className="btn-signup" aria-label="Create a new account">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
