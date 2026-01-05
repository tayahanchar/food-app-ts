import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { selectUserToken } from "../store/user";
import { useSelector } from "react-redux";

const RequereAuth = ({ children }: { children: ReactNode }) => {
  const token = useSelector(selectUserToken);
  console.log(token);

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

export default RequereAuth;
