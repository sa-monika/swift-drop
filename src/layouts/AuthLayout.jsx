import React from "react";
import Logo from "../components/Logo/Logo";
import authImg from "../assets/authImg.jpg";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto mt-10">
      <Logo></Logo>
      <div className="flex justify-between items-center gap-50">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img className="w-full object-cover" src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
