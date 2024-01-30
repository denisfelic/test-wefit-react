import styled from "styled-components";
import { ICartItemProps } from "../../contexts/CartContextProvider";
import theme from "../../styles/theme";
import { displayMoneyValueFormatted } from "../../helpers/displayMoneyValueFormatted";
import { useState } from "react";

const CartItemWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const CartItemImage = styled.img`
  width: 64px;
  height: 82px;
  object-fit: cover;
`;

const CartInfoTopTextsWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`;

const CartTitle = styled.p`
  color: ${theme.colors.darkGray};
  font-size: 14px;
  font-weight: bold;
`;

const CartPrice = styled.p`
  font-weight: bold;
`;

const CartInfoTopWrapper = styled.div`
  padding-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;
  gap: 16px;
`;

const CartInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const CartInfoBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartActionsButtonWrapper = styled.button`
  display: flex;
  gap: 11px;
  align-items: center;
`;

const CartActionButton = styled.button`
  width: 18px;
  height: 18px;
`;

const CartQuantityInput = styled.input`
  border: 1px solid ${theme.colors.lightGray};
  font-size: 14px;
  color: ${theme.colors.darkGray};
  width: fit-content;
  padding: 3.5px 12px;
  max-width: 59px;
  border-radius: ${theme.borderRadius};
`;

const CartSubTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  text-align: right;
  gap: 2px;
`;

const CartSubTotalText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${theme.colors.gray};
  text-transform: uppercase;
`;

export interface ICartItem {
  cartItem: ICartItemProps;
  onRemoveCartItem: () => void;
  onIncrementCartItem: () => void;
  onDecrementCartItem: () => void;
  onUpdateProductQuantity: (quantity: number) => void;
}
export default function CartItem({
  cartItem,
  onRemoveCartItem,
  onIncrementCartItem,
  onDecrementCartItem,
  onUpdateProductQuantity,
}: ICartItem) {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const subTotal = cartItem.product.price * cartItem.quantity;

  const onDecrement = () => {
    if (cartItem.quantity > 1) {
      onDecrementCartItem();
      setQuantity((prev) => prev - 1);
      return;
    }

    onRemoveCartItem();
  };

  const handleUpdateQuantity = () => {
    if (quantity > 0) {
      onUpdateProductQuantity(quantity);
    }
  };

  return (
    <CartItemWrapper>
      <CartItemImage
        src={cartItem.product.image}
        alt={`Imagem do produto ${cartItem.product.title}`}
      />
      <CartInfoWrapper>
        <CartInfoTopWrapper>
          <CartInfoTopTextsWrapper>
            <CartTitle>{cartItem.product.title}</CartTitle>
            <CartPrice>
              R$ {displayMoneyValueFormatted(cartItem.product.price)}
            </CartPrice>
          </CartInfoTopTextsWrapper>
          <button onClick={onRemoveCartItem}>
            <img src="/svg/bin-trash.svg" alt="imagem de lixeira" />
          </button>
        </CartInfoTopWrapper>

        <CartInfoBottomWrapper>
          <CartActionsButtonWrapper>
            <CartActionButton onClick={onDecrement}>
              <img src="/svg/remove-icon.svg" alt="" />
            </CartActionButton>
            <CartQuantityInput
              min={1}
              value={parseInt(quantity.toString())}
              type="number"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUpdateQuantity();
                }
              }}
              onChange={(event) => {
                const value = Number(event.target.value);
                if (typeof value === "number" && value > -1) {
                  setQuantity(value);
                }
              }}
            />
            <CartActionButton
              onClick={() => {
                setQuantity((prev) => prev + 1);
                onIncrementCartItem();
              }}
            >
              <img src="/svg/add-icon.svg" alt="" />
            </CartActionButton>
          </CartActionsButtonWrapper>
          <CartSubTotalWrapper>
            <CartSubTotalText>Subtotal</CartSubTotalText>
            <CartPrice>R$ {displayMoneyValueFormatted(subTotal)}</CartPrice>
          </CartSubTotalWrapper>
        </CartInfoBottomWrapper>
      </CartInfoWrapper>
    </CartItemWrapper>
  );
}
