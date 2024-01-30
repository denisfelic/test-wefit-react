import { useNavigate } from "react-router-dom";
import useCart from "../contexts/CartContextProvider/useCart";
import { useMemo } from "react";
import EmptyCart from "../components/EmptyCart";
import CartCheckoutList from "../components/Cart/CartCheckoutList";
import { routes } from "../App";

export default function CartCheckout({
  onProceedCheckout,
}: {
  onProceedCheckout: () => void;
}) {
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
    <>
      {cartProducts.length === 0 ? (
        <EmptyCart
          title={
            <>
              Parece que não <br />
              há nada por aqui :(
            </>
          }
          image={{ src: "/svg/empty-cart.svg", alt: "Empty Cart" }}
          buttonProps={{
            onClick: () => navigate(routes.home),
            children: "Voltar",
          }}
        />
      ) : (
        <>
          <CartCheckoutList
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
            onProceedCheckout={onProceedCheckout}
          />
        </>
      )}
    </>
  );
}
