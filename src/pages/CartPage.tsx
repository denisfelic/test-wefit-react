import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../App";
import Button from "../components/Button";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/EmptyCart";
import Layout from "../components/Layout";
import { ICartItemProps } from "../contexts/CartContextProvider";
import useCart from "../contexts/CartContextProvider/useCart";
import { displayMoneyValueFormatted } from "../helpers/displayMoneyValueFormatted";
import theme from "../styles/theme";
import { useMemo } from "react";
import useProducts from "../hooks/api/useProducts";

export default function CartPage() {
  const { isLoading } = useProducts();
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

const CartCheckoutWrapper = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CartCheckoutItemsWrapper = styled.ul`
  flex: 1;
  height: 80%;
`;

const CartCheckoutItemsScroll = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;
  overflow-y: scroll;
  max-height: 72.9vh;
  padding: 16px;
`;

const CartCheckoutBottomWrapper = styled.div`
  border-top: 1px solid ${theme.colors.gray};
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 20px 16px 16px 16px;
`;

const CartCheckoutTotalTextWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: end;
  align-items: center;
  padding-right: 16px;
  gap: 30px;
`;

const CartCheckoutTotalTextLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.gray};
  text-transform: uppercase;
`;

const CartCheckoutTotalTextValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.darkGray};
  text-transform: uppercase;
`;

const CartCheckout = ({
  cartItems,
  totalCartValue,
  onRemoveCartItem,
  onIncrementCartItem,
  onDecrementCartItem,
  onUpdateProductQuantity,
}: {
  cartItems: ICartItemProps[];
  totalCartValue: number;
  onRemoveCartItem: (cartItem: ICartItemProps) => void;
  onIncrementCartItem: (product: ICartItemProps) => void;
  onDecrementCartItem: (product: ICartItemProps) => void;
  onUpdateProductQuantity: (product: ICartItemProps, quantity: number) => void;
}) => {
  return (
    <CartCheckoutWrapper>
      <CartCheckoutItemsWrapper>
        <CartCheckoutItemsScroll>
          {cartItems.map((cartItem) => (
            <li>
              <CartItem
                cartItem={cartItem}
                key={cartItem.product.id}
                onRemoveCartItem={() => onRemoveCartItem(cartItem)}
                onIncrementCartItem={() => onIncrementCartItem(cartItem)}
                onDecrementCartItem={() => onDecrementCartItem(cartItem)}
                onUpdateProductQuantity={(quantity) =>
                  onUpdateProductQuantity(cartItem, quantity)
                }
              />
            </li>
          ))}
        </CartCheckoutItemsScroll>
      </CartCheckoutItemsWrapper>

      <CartCheckoutBottomWrapper>
        <CartCheckoutTotalTextWrapper>
          <CartCheckoutTotalTextLabel>Total</CartCheckoutTotalTextLabel>
          <CartCheckoutTotalTextValue>
            R$ {displayMoneyValueFormatted(totalCartValue)}
          </CartCheckoutTotalTextValue>
        </CartCheckoutTotalTextWrapper>
        <Button>
          <Button.Text size="medium">Finalizar pedido</Button.Text>
        </Button>
      </CartCheckoutBottomWrapper>
    </CartCheckoutWrapper>
  );
};
