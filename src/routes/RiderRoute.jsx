import React, { Children } from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { PropagateLoader } from "react-spinners";
import Forbidden from "../components/Logo/Forbidden/Forbidden";
const RiderRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PropagateLoader color="#ffaf13" />
      </div>
    );
  }

  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }
  return children;
};

export default RiderRoute;
