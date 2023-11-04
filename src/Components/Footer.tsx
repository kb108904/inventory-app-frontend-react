import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Your Inventory App</p>
          <p>
            <a href="https://www.flaticon.com/free-icons/inventory" title="Inventory icons">Icons created by muh zakaria - Flaticon</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
