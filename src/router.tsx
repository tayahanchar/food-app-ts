import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Product from "./components/Product/Product";
import axios from "axios";
import { URL } from "./constants";

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
      {
        path: "/product/:id",
        element: <Product />,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${URL}/products/${params.id}`);
          return data;
        },
        errorElement: <div>Something went wrong!</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);
