import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationMenu />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);
