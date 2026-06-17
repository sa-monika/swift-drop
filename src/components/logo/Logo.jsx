import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <img className="w-10 h-10" src={logo} alt="" />{" "}
        <h3 className="text-2xl font-medium">SwiftDrop</h3>
      </div>
    </Link>
  );
};

export default Logo;
