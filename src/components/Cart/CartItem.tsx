import styled from "styled-components";
import { ICartItemProps } from "../../contexts/CartContextProvider";
import theme from "../../styles/theme";
import { displayMoneyValueFormatted } from "../../helpers/displayMoneyValueFormatted";

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

export default function CartItem({ cartItem }: { cartItem: ICartItemProps }) {
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
          <button>
            <img src="/svg/bin-trash.svg" alt="imagem de lixeira" />
          </button>
        </CartInfoTopWrapper>

        <CartInfoBottomWrapper>
          <CartActionsButtonWrapper>
            <CartActionButton>
              <img src="/svg/remove-icon.svg" alt="" />
            </CartActionButton>
            <CartQuantityInput value={1} />
            <CartActionButton>
              <img src="/svg/add-icon.svg" alt="" />
            </CartActionButton>
          </CartActionsButtonWrapper>
          <CartSubTotalWrapper>
            <CartSubTotalText>Subtotal</CartSubTotalText>
            <CartPrice>
              R$ {displayMoneyValueFormatted(cartItem.product.price)}
            </CartPrice>
          </CartSubTotalWrapper>
        </CartInfoBottomWrapper>
      </CartInfoWrapper>
    </CartItemWrapper>
  );
}
