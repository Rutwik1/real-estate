import React from "react";
import { Link } from "react-scroll";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <nav className="header" id="header">

          <Link className="logo-brand" to="header">
            REAL ESTATE
          </Link>

          <ul>
            <li>
              <Link to="header" smooth activeClass="active" spy>
                Home
              </Link>
            </li>
            <li>
              <Link to="listings" smooth activeClass="active" spy>
                Listings
              </Link>
            </li>
            <li>
              <Link to="testimonials" smooth activeClass="active" spy>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="contactsection" smooth activeClass="active" spy>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="auth-buttons">
            <SignIn />
            <SignUp />
          </div>

        </nav>
      </header>
    </>
  );
};

export default Header;
