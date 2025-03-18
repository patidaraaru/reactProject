import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBarLinks">
      <Link className="navLink" to="/home">Home</Link>
      <Link className="navLink" to="/about">About</Link>
      <Link className="navLink" to="/contact">Contact</Link>
      <Link className="navLink" to="/product">Product</Link>
      <Link className="navLink" to="/login">Login</Link>
    </nav>
  );
};

export default NavBar;
