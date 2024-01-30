import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../App";
import CartCheckout from "../components/Cart/CartCheckout";
import EmptyCart from "../components/EmptyCart";
import Layout from "../components/Layout";
import useCart from "../contexts/CartContextProvider/useCart";

export default function CartPage() {
  const { isLoading } = useCart();
  const {
    cartProducts,
    removeProductFromCart,
    addProductToCart,
    decrementProductQuantity,
    updateProductQuantity,
  } = useCart();
  const navigate = useNavigate();

  const totalCartValue = useMemo(
    () =>
      cartProducts.reduce(
        (acc, curr) => acc + curr.product.price * curr.quantity,
        0
      ),
    [cartProducts]
  );

  return (
    <Layout isLoading={isLoading}>
      <Layout.ContentWrapper>
        {cartProducts.length === 0 ? (
          <EmptyCart onGoBack={() => navigate(routes.home)} />
        ) : (
          <>
            <CartCheckout
              cartItems={cartProducts}
              totalCartValue={totalCartValue}
              onRemoveCartItem={(cartItem) =>
                removeProductFromCart(cartItem.product)
              }
              onIncrementCartItem={(cartItem) =>
                addProductToCart(cartItem.product)
              }
              onDecrementCartItem={(cartItem) =>
                decrementProductQuantity(cartItem.product)
              }
              onUpdateProductQuantity={(cartItem, quantity) =>
                updateProductQuantity(cartItem.product, quantity)
              }
            />
          </>
        )}
      </Layout.ContentWrapper>
    </Layout>
  );
}
