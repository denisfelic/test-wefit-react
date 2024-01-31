import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../App";
import CartCheckoutList from "../components/Cart/CartCheckoutList";
import GenericCardWithImage from "../components/GenericCardWithImage";
import useCart from "../contexts/CartContextProvider/useCart";
import styled from "styled-components";
import theme from "../styles/theme";

const MobileImage = styled.img`
  display: block;
  @media screen and (${theme.breakpoints.lg}) {
    display: none;
  }
`;

const DesktopImage = styled.img`
  display: none;
  @media screen and (${theme.breakpoints.lg}) {
    display: block;
    margin: 0 auto;
    margin-top: 12px;
    max-width: 470.6px;
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
        <GenericCardWithImage
          title={{
            mobile: (
              <>
                Parece que não <br />
                há nada por aqui :(
              </>
            ),
            desktop: <>Parece que não há nada por aqui :(</>,
          }}
          image={
            <>
              <MobileImage src={"/svg/empty-cart.svg"} />
              <DesktopImage src={"/svg/empty-cart-desktop.svg"} />
            </>
          }
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
