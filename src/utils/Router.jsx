import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../components/Cart";
import ProductMenu from "../components/ProductMenu";
import Body from "../components/Body";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/:id",
        element: <ProductMenu />,
      },
    ],
  },
]);
