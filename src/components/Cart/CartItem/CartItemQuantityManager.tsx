import {
  CartItemActionButton,
  CartItemActionsButtonWrapper,
  CartItemQuantityInput,
} from "./styled";

export default function CartItemQuantityManager({
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
}) {
  const MAX_INPUT_VALUE = 99999999;
  return (
    <CartItemActionsButtonWrapper>
      <CartItemActionButton onClick={onDecrement}>
        <img src="/svg/remove-icon.svg" alt="" />
      </CartItemActionButton>
      <CartItemQuantityInput
        min={1}
        max={MAX_INPUT_VALUE}
        value={parseInt(quantity.toString())}
        type="number"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleUpdateQuantity();
          }
        }}
        onChange={(event) => {
          const value = Number(event.target.value);
          if (typeof value === "number" && value > -1 && value < MAX_INPUT_VALUE) {
            setQuantity(value);
          }
        }}
      />
      <CartItemActionButton
        onClick={() => {
          setQuantity((prev) => prev + 1);
          onIncrementCartItem();
        }}
      >
        <img src="/svg/add-icon.svg" alt="" />
      </CartItemActionButton>
    </CartItemActionsButtonWrapper>
  );
}
