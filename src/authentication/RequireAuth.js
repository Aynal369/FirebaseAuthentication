import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RequireAuth = ({ children }) => {
  const { isLoading, users } = useAuth();

  let location = useLocation();

  if (isLoading) {
    return <p className="text-center display-6 mt-4">Hello</p>;
  }

  if (users?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default RequireAuth;
