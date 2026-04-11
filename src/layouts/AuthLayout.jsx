import React from "react";
import Logo from "../components/Logo/Logo";
import authImg from "../assets/authImg.jpg";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="">
      <Logo></Logo>
      <div className="flex justify-between items-center">
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <img className="w-full h-100 object-cover" src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
