import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li id="logo"><Link className="links" to="/">Math Magicians</Link></li>
      <li><Link className="links" to="/quote">Quote</Link></li>
      <li><Link className="links" to="/calculator">Calculator</Link></li>
      <li><Link className="links" to="/">Home</Link></li>
    </ul>
  </nav>
);

export default Navbar;
