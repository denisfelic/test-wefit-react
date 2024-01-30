import { useNavigate } from "react-router-dom";
import { routes } from "../App";
import EmptyCart from "../components/EmptyCart";
import Layout from "../components/Layout";
import { ICartItemProps } from "../contexts/CartContextProvider";
import useCart from "../contexts/CartContextProvider/useCart";
import styled from "styled-components";
import theme from "../styles/theme";
import CartItem from "../components/Cart/CartItem";
import Button from "../components/Button";
import { displayMoneyValueFormatted } from "../helpers/displayMoneyValueFormatted";

export default function CartPage() {
  const { cartProducts } = useCart();
  const navigate = useNavigate();

  console.log(cartProducts);

  return (
    <Layout>
      <Layout.ContentWrapper>
        {cartProducts.length === 0 ? (
          <EmptyCart onGoBack={() => navigate(routes.home)} />
        ) : (
          <>
            <CartCheckout cartItems={cartProducts} />
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

const CartCheckout = ({ cartItems }: { cartItems: ICartItemProps[] }) => {
  const totalCartValue = cartItems.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );
  return (
    <CartCheckoutWrapper>
      <CartCheckoutItemsWrapper>
        <CartCheckoutItemsScroll>
          {cartItems.map((cartItem) => (
            <li>
              <CartItem cartItem={cartItem} key={cartItem.product.id} />
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
