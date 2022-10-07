import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">Home</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/grandpa">Grandpa</Link>
    </div>
  );
};

export default Header;
