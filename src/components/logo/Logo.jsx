import React from "react";
import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-center justify-between">
      <img className="w-10 h-10" src={logo} alt="" />{" "}
      <h3 className="text-3xl font-bold">SwiftDrop</h3>
    </div>
  );
};

export default Logo;
