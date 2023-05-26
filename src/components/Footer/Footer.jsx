import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <Link className="footer-logo" to="header">
            REAL ESTATE
          </Link>
          <p className="footer-desc">
            "Real Estate" is a disruptive real-estate platform that makes it possible
            to buy/sell/rent a house without paying any brokerage.
          </p>
          <div className="footer-links">
            <ul className='footer-ul'>
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
          </div>
          <p className="footer-copyright">
            ©   Real Estate {new Date().getFullYear()}. Made with ❤️ by Rutwikk
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

