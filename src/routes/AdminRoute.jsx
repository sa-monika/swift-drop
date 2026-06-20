import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import Forbidden from "../components/Logo/Forbidden/Forbidden";
import { PropagateLoader } from "react-spinners";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();
  if (loading || roleLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PropagateLoader color="#ffaf13" />
      </div>
    );
  }

  if (role !== "admin") {
    return <Forbidden></Forbidden>;
  }
  return children;
};

export default AdminRoute;
