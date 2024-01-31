import { ICartItemProps } from "../../../contexts/CartContextProvider/types";
import { displayMoneyValueFormatted } from "../../../helpers/displayMoneyValueFormatted";
import Button from "../../Button";
import CartItem from "../CartItem";
import {
  CartCartCheckoutButtonWrapper,
  CartCheckoutBottomWrapper,
  CartCheckoutButton,
  CartCheckoutContainerWrapper,
  CartCheckoutItemsHeaderContainer,
  CartCheckoutItemsHeaderItem,
  CartCheckoutItemsScroll,
  CartCheckoutItemsWrapper,
  CartCheckoutSubContainerWrapper,
  CartCheckoutTotalTextLabel,
  CartCheckoutTotalTextValue,
  CartCheckoutTotalTextWrapper,
  CheckoutHr,
} from "./styled";

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
          <CartCheckoutItemsHeaderContainer>
            <CartCheckoutItemsHeaderItem>Produto</CartCheckoutItemsHeaderItem>
            <CartCheckoutItemsHeaderItem>Qtd</CartCheckoutItemsHeaderItem>
            <CartCheckoutItemsHeaderItem>SubTotal</CartCheckoutItemsHeaderItem>
          </CartCheckoutItemsHeaderContainer>
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
          <CheckoutHr />
        </CartCheckoutItemsWrapper>

        <CartCheckoutBottomWrapper>
          <CartCheckoutTotalTextWrapper>
            <CartCheckoutTotalTextLabel>Total</CartCheckoutTotalTextLabel>
            <CartCheckoutTotalTextValue>
              R$ {displayMoneyValueFormatted(totalCartValue)}
            </CartCheckoutTotalTextValue>
          </CartCheckoutTotalTextWrapper>
          <CartCartCheckoutButtonWrapper>
            <CartCheckoutButton>
              <Button.Text size="medium" onClick={onProceedCheckout}>
                Finalizar pedido
              </Button.Text>
            </CartCheckoutButton>
          </CartCartCheckoutButtonWrapper>
        </CartCheckoutBottomWrapper>
      </CartCheckoutSubContainerWrapper>
    </CartCheckoutContainerWrapper>
  );
}
