import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/signIn"></Navigate>
    </div>
  );
};

export default PrivateRoute;
