import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <p>auth</p>
      <Outlet />
    </div>
  );
};

export default Auth;
