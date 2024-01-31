import { useState } from "react";
import { ICartItemProps } from "../../../contexts/CartContextProvider/types";
import { displayMoneyValueFormatted } from "../../../helpers/displayMoneyValueFormatted";
import CartItemQuantityManager from "./CartItemQuantityManager";
import {
  CartItemDesktopWrapper,
  CartItemImage,
  CartItemInfoBottomWrapper,
  CartItemInfoTopTextsWrapper,
  CartItemInfoTopWrapper,
  CartItemInfoWrapper,
  CartItemMobileWrapper,
  CartItemPrice,
  CartItemRemoveItemButtonDesktopWrapper,
  CartItemSubTotalText,
  CartItemSubTotalWrapper,
  CartItemTitle,
} from "./styled";

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
        <CartItemInfoWrapper>
          <CartItemInfoTopWrapper>
            <CartItemInfoTopTextsWrapper>
              <CartItemTitle>{cartItem.product.title}</CartItemTitle>
              <CartItemPrice>
                R$ {displayMoneyValueFormatted(cartItem.product.price)}
              </CartItemPrice>
            </CartItemInfoTopTextsWrapper>
            <button onClick={onRemoveCartItem}>
              <img src="/svg/bin-trash.svg" alt="imagem de lixeira" />
            </button>
          </CartItemInfoTopWrapper>

          <CartItemInfoBottomWrapper>
            <CartItemQuantityManager
              handleUpdateQuantity={handleUpdateQuantity}
              onDecrement={onDecrement}
              onIncrementCartItem={onIncrementCartItem}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <CartItemSubTotalWrapper>
              <CartItemSubTotalText>Subtotal</CartItemSubTotalText>
              <CartItemPrice>
                R$ {displayMoneyValueFormatted(subTotal)}
              </CartItemPrice>
            </CartItemSubTotalWrapper>
          </CartItemInfoBottomWrapper>
        </CartItemInfoWrapper>
      </CartItemMobileWrapper>

      {/* Desktop view */}
      <CartItemDesktopWrapper>
        <>
          <div style={{ display: "flex" }}>
            <CartItemImage
              src={cartItem.product.image}
              alt={`Imagem do produto ${cartItem.product.title}`}
            />

            <CartItemInfoTopTextsWrapper>
              <CartItemTitle>{cartItem.product.title}</CartItemTitle>
              <CartItemPrice>
                R$ {displayMoneyValueFormatted(cartItem.product.price)}
              </CartItemPrice>
            </CartItemInfoTopTextsWrapper>
          </div>
          <CartItemQuantityManager
            handleUpdateQuantity={handleUpdateQuantity}
            onDecrement={onDecrement}
            onIncrementCartItem={onIncrementCartItem}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <CartItemSubTotalWrapper>
            <CartItemPrice>
              R$ {displayMoneyValueFormatted(subTotal)}
            </CartItemPrice>
          </CartItemSubTotalWrapper>

          <CartItemRemoveItemButtonDesktopWrapper>
            <button onClick={onRemoveCartItem}>
              <img src="/svg/bin-trash.svg" alt="imagem de lixeira" />
            </button>
          </CartItemRemoveItemButtonDesktopWrapper>
        </>
      </CartItemDesktopWrapper>
    </>
  );
}
