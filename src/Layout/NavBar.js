import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBarLinks">
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/about">About</Link>
      <Link className="navLink" to="/contact">Contact</Link>
      <Link className="navLink" to="/product">Product</Link>
    </nav>
  );
};

export default NavBar;
