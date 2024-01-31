import styled from "styled-components";
import { ICartItemProps } from "../../contexts/CartContextProvider/types";
import { displayMoneyValueFormatted } from "../../helpers/displayMoneyValueFormatted";
import theme from "../../styles/theme";
import Button, { DefaultButtonStyles } from "../Button";
import CartItem from "./CartItem";

const CartCheckoutContainerWrapper = styled.div`
  flex: 1;
  display: flex;

  @media screen and (${theme.breakpoints.lg}) {
    max-width: ${theme.container};
    margin: 0 auto;
    width: 100%;
  }
`;

const CartCheckoutSubContainerWrapper = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (${theme.breakpoints.lg}) {
    margin-left: 9.8px;
    height: fit-content;
  }
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
  max-height: 75.9vh;
  padding: 16px;
  padding-bottom: 19px;
`;

const CartCheckoutBottomWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 20px 16px 16px 16px;

  @media screen and (${theme.breakpoints.lg}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 20px 16px 25px 16px;
  }
`;

const CartCheckoutTotalTextWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: end;
  align-items: center;
  padding-right: 16px;
  gap: 30px;

  @media screen and (${theme.breakpoints.lg}) {
    padding-right: 25px;
  }
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

const CartCheckoutButtonWrapper = styled.div`
  @media screen and (${theme.breakpoints.lg}) {
    padding-left: 8px;
  }
`;

// Desktop Version Only components
const CartItemsHeaderContainer = styled.div`
  display: none;

  @media screen and (${theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 444px 171px 1fr;
    padding-top: 27.3px;
    padding-left: 25.3px;
  }
`;

const CartItemsHeaderItem = styled.li`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.gray};
  text-transform: uppercase;
`;

const Hr = styled.hr`
  border: 1px solid ${theme.colors.lightGray};
  margin: 0 24px;
`;

const CheckoutButton = styled.button`
  ${DefaultButtonStyles}

  @media screen and (${theme.breakpoints.lg}) {
    padding: 13px 52.3px;
  }
`;

export default function CartCheckoutList({
  cartItems,
  totalCartValue,
  onRemoveCartItem,
  onIncrementCartItem,
  onDecrementCartItem,
  onUpdateProductQuantity,
  onProceedCheckout,
}: {
  cartItems: ICartItemProps[];
  totalCartValue: number;
  onRemoveCartItem: (cartItem: ICartItemProps) => void;
  onIncrementCartItem: (product: ICartItemProps) => void;
  onDecrementCartItem: (product: ICartItemProps) => void;
  onUpdateProductQuantity: (product: ICartItemProps, quantity: number) => void;
  onProceedCheckout: () => void;
}) {
  return (
    <CartCheckoutContainerWrapper>
      <CartCheckoutSubContainerWrapper>
        <CartCheckoutItemsWrapper>
          <CartItemsHeaderContainer>
            <CartItemsHeaderItem>Produto</CartItemsHeaderItem>
            <CartItemsHeaderItem>Qtd</CartItemsHeaderItem>
            <CartItemsHeaderItem>SubTotal</CartItemsHeaderItem>
          </CartItemsHeaderContainer>
          <CartCheckoutItemsScroll className="hide-scroll-bar">
            {cartItems.map((cartItem) => (
              <li key={cartItem.product.id}>
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
          <Hr />
        </CartCheckoutItemsWrapper>

        <CartCheckoutBottomWrapper>
          <CartCheckoutTotalTextWrapper>
            <CartCheckoutTotalTextLabel>Total</CartCheckoutTotalTextLabel>
            <CartCheckoutTotalTextValue>
              R$ {displayMoneyValueFormatted(totalCartValue)}
            </CartCheckoutTotalTextValue>
          </CartCheckoutTotalTextWrapper>
          <CartCheckoutButtonWrapper>
            <CheckoutButton>
              <Button.Text size="medium" onClick={onProceedCheckout}>
                Finalizar pedido
              </Button.Text>
            </CheckoutButton>
          </CartCheckoutButtonWrapper>
        </CartCheckoutBottomWrapper>
      </CartCheckoutSubContainerWrapper>
    </CartCheckoutContainerWrapper>
  );
}
