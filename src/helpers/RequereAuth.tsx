import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

const RequereAuth = ({ children }: { children: ReactNode }) => {
  const token = null;

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

export default RequereAuth;
