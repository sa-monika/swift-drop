import React from "react";
import Logo from "../components/Logo/Logo";
import authImg from "../assets/authImg.jpg";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto mt-8">
      <Logo></Logo>
      <div className="flex items-center gap-20 max-w-11/12 mx-auto">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img className="w-140 object-cover mx-auto" src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
