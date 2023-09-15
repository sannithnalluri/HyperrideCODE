import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={require('../Assests/hyperride2.png')} alt="Logo" className="footer-logo" />
          <p>&copy; 2023 All Right Reserved</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="/About">Privacy Policy</a></li>
            <li><a href="Terms">Terms of Service</a></li>
            <li><a href="Contact">Contact Us</a></li>
            <li><Link to="/Adminportal">Admin_portal</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
