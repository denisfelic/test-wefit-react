import { useNavigate } from "react-router-dom";
import useCart from "../contexts/CartContextProvider/useCart";
import { useMemo } from "react";
import EmptyCart from "../components/EmptyCart";
import CartCheckoutList from "../components/Cart/CartCheckoutList";
import { routes } from "../App";
import styled from "styled-components";
import theme from "../styles/theme";

const EmptyCardWrapper = styled.div`
  max-width: ${theme.container};
  margin: 0 auto;
  width: 100%;
`;

const EmptyCardSubWrapper = styled.div`
  @media screen and (${theme.breakpoints.lg}) {
    margin-left: -11px;
    padding-right: 11px;
  }
`;

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
        <EmptyCardWrapper>
          <EmptyCardSubWrapper>
            <EmptyCart
              title={{
                mobile: <>Parece que não <br/>há nada por aqui :(</>,
                desktop: <>Parece que não há nada por aqui :(</>
              }}
              image={{
                src: {
                  mobile: "/svg/empty-cart.svg",
                  desktop: "/svg/empty-cart-desktop.svg",
                },
                alt: "Empty Cart",
              }}
              buttonProps={{
                onClick: () => navigate(routes.home),
                children: "Voltar",
              }}
            />
          </EmptyCardSubWrapper>
        </EmptyCardWrapper>
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
