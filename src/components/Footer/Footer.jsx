import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__section">
          <h3>ProVital</h3>
          <p>
            Optimize your lifestyle and reverse chronic diseases with expert
            guidance.
          </p>
        </div>
        <div className="footer__section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about" aria-label="Learn more about ProVital">
                About Us
              </a>
            </li>
            <li>
              <a href="/find-doctor" aria-label="Search for a doctor">
                Find a Doctor
              </a>
            </li>
            <li>
              <a
                href="/practitioners"
                aria-label="Information for medical practitioners"
              >
                For Practitioners
              </a>
            </li>
            <li>
              <a href="/resources" aria-label="Access medical resources">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="/contact" aria-label="Contact ProVital support">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" aria-label="View frequently asked questions">
                FAQ
              </a>
            </li>
            <li>
              <a href="/privacy" aria-label="Read our privacy policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" aria-label="Read our terms of service">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Connect</h4>
          <div className="footer__social">
            <a
              href="/provital"
              className="footer__social-link"
              aria-label="Visit ProVital on Facebook"
            >
              Facebook
            </a>
            <a
              href="/provital"
              className="footer__social-link"
              aria-label="Follow ProVital on Twitter"
            >
              Twitter
            </a>
            <a
              href="/provital"
              className="footer__social-link"
              aria-label="Connect with ProVital on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="/provital"
              className="footer__social-link"
              aria-label="Follow ProVital on Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2025 ProVital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
