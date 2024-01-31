import { useState } from "react";
import styled from "styled-components";
import { ICartItemProps } from "../../contexts/CartContextProvider/types";
import { displayMoneyValueFormatted } from "../../helpers/displayMoneyValueFormatted";
import theme from "../../styles/theme";

const CartItemMobileWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (${theme.breakpoints.lg}) {
    display: none;
  }
`;

const CartItemImage = styled.img`
  width: 64px;
  height: 82px;
  object-fit: cover;

  @media screen and (${theme.breakpoints.lg}) {
    width: 89px;
    height: 114px;
  }
`;

const CartInfoTopTextsWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  height: fit-content;

  @media screen and (${theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: baseline;
    padding-left: 52px;
    align-self: center;
    gap: 13px;
  }
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

  @media screen and (${theme.breakpoints.lg}) {
    padding-left: 3.6px;
    gap: 11.7px;
    margin-top: -0.9px;
  }
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
  gap: 2.6px;

  @media screen and (${theme.breakpoints.lg}) {
    height: 100%;
    flex-direction: row;
    align-items: center;
    padding-left: 3px;
  }
`;

const CartSubTotalText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${theme.colors.gray};
  text-transform: uppercase;
`;

// Desktop Version Only components

const CartItemDesktopWrapper = styled.div`
  display: none;
  @media screen and (${theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 444px 171px 1fr 1fr;
    padding-left: 8px;
    padding-top: 9px;
    align-items: center;
  }
`;

const CartRemoveItemButtonDesktopWrapper = styled.div`
  display: none;
  @media screen and (${theme.breakpoints.lg}) {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 9px;
  }
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
    <>
      {/* Mobile view */}
      <CartItemMobileWrapper>
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
            <CartQuantityManager
              handleUpdateQuantity={handleUpdateQuantity}
              onDecrement={onDecrement}
              onIncrementCartItem={onIncrementCartItem}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <CartSubTotalWrapper>
              <CartSubTotalText>Subtotal</CartSubTotalText>
              <CartPrice>R$ {displayMoneyValueFormatted(subTotal)}</CartPrice>
            </CartSubTotalWrapper>
          </CartInfoBottomWrapper>
        </CartInfoWrapper>
      </CartItemMobileWrapper>

      {/* Desktop view */}
      <CartItemDesktopWrapper>
        <>
          <div style={{ display: "flex" }}>
            <CartItemImage
              src={cartItem.product.image}
              alt={`Imagem do produto ${cartItem.product.title}`}
            />

            <CartInfoTopTextsWrapper>
              <CartTitle>{cartItem.product.title}</CartTitle>
              <CartPrice>
                R$ {displayMoneyValueFormatted(cartItem.product.price)}
              </CartPrice>
            </CartInfoTopTextsWrapper>
          </div>
          <CartQuantityManager
            handleUpdateQuantity={handleUpdateQuantity}
            onDecrement={onDecrement}
            onIncrementCartItem={onIncrementCartItem}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <CartSubTotalWrapper>
            <CartPrice>R$ {displayMoneyValueFormatted(subTotal)}</CartPrice>
          </CartSubTotalWrapper>

          <CartRemoveItemButtonDesktopWrapper>
            <button onClick={onRemoveCartItem}>
              <img src="/svg/bin-trash.svg" alt="imagem de lixeira" />
            </button>
          </CartRemoveItemButtonDesktopWrapper>
        </>
      </CartItemDesktopWrapper>
    </>
  );
}

const CartQuantityManager = ({
  quantity,
  onDecrement,
  handleUpdateQuantity,
  setQuantity,
  onIncrementCartItem,
}: {
  quantity: number;
  onDecrement: () => void;
  handleUpdateQuantity: () => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  onIncrementCartItem: () => void;
}) => {
  const MAX_VALUE = 99999999;
  return (
    <CartActionsButtonWrapper>
      <CartActionButton onClick={onDecrement}>
        <img src="/svg/remove-icon.svg" alt="" />
      </CartActionButton>
      <CartQuantityInput
        min={1}
        max={MAX_VALUE}
        value={parseInt(quantity.toString())}
        type="number"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleUpdateQuantity();
          }
        }}
        onChange={(event) => {
          const value = Number(event.target.value);
          if (typeof value === "number" && value > -1 && value < MAX_VALUE) {
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
  );
};
