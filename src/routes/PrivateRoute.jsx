import React from "react";
import useAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router";
// import { PropagateLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();
  console.log("location", location);

  if (loading) {
    // return <PropagateLoader color="#ffaf13" />;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
