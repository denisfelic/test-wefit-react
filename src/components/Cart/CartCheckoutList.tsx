import styled from "styled-components";
import { ICartItemProps } from "../../contexts/CartContextProvider";
import { displayMoneyValueFormatted } from "../../helpers/displayMoneyValueFormatted";
import theme from "../../styles/theme";
import Button from "../Button";
import CartItem from "./CartItem";

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

export default function CartCheckoutList({
  cartItems,
  totalCartValue,
  onRemoveCartItem,
  onIncrementCartItem,
  onDecrementCartItem,
  onUpdateProductQuantity,
  onProceedCheckout
}: {
  cartItems: ICartItemProps[];
  totalCartValue: number;
  onRemoveCartItem: (cartItem: ICartItemProps) => void;
  onIncrementCartItem: (product: ICartItemProps) => void;
  onDecrementCartItem: (product: ICartItemProps) => void;
  onUpdateProductQuantity: (product: ICartItemProps, quantity: number) => void;
  onProceedCheckout: () => void
}) {
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
          <Button.Text size="medium" onClick={onProceedCheckout}>Finalizar pedido</Button.Text>
        </Button>
      </CartCheckoutBottomWrapper>
    </CartCheckoutWrapper>
  );
}
