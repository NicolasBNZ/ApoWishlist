// Import packages/modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import style-sheet
import './footer.scss';

// Import component
const Footer = () => (

  <div className="footer">

    <Link
      key="1"
      to="/legal"
      className="footer-link">
      CGU
    </Link>

    <Link
      key="2"
      to="/about"
      className="footer-link">
      About
    </Link>

    <Link
      key="3"
      to="/contact"
      className="footer-link">
      Contact
    </Link>

  </div>
);

// Export component
export default Footer;
