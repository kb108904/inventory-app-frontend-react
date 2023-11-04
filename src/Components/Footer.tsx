import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerZZZ">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Developed by Kevin D. Brown II
          <br/>
          <a href="https://www.flaticon.com/free-icons/inventory" title="Inventory icons">Icons created by muh zakaria - Flaticon</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
