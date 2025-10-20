import { Link, Outlet } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <div>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/Cart">Cart</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavigationMenu;
