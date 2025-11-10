import { createBrowserRouter } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Product from "./components/Product/Product";
import axios from "axios";
import { URL } from "./constants";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Auth from "./components/Auth/Auth";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

const LazyCart = lazy(() => import("./pages/Cart/Cart"));
const LazyMain = lazy(() => import("./pages/Main/Main"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationMenu />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LazyMain />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LazyCart />
          </Suspense>
        ),
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
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);
