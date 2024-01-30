import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartContextProvider from "./contexts/CartContextProvider";
import HomePage from "./pages/Home";
import CartPage from "./pages/CartPage";

export const routes = {
  home: "/",
  cart: "/cart",
};

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HomePage />,
  },
  {
    path: routes.cart,
    element: <CartPage />,
  },
]);

export default function App() {
  return (
    <>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </>
  );
}
