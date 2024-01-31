import styled from "styled-components";
import theme from "../../../styles/theme";

export const CartItemMobileWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (${theme.breakpoints.lg}) {
    display: none;
  }
`;

export const CartItemImage = styled.img`
  width: 64px;
  height: 82px;
  object-fit: cover;

  @media screen and (${theme.breakpoints.lg}) {
    width: 89px;
    height: 114px;
  }
`;

export const CartItemInfoTopTextsWrapper = styled.div`
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

export const CartItemTitle = styled.p`
  color: ${theme.colors.darkGray};
  font-size: 14px;
  font-weight: bold;
`;

export const CartItemPrice = styled.p`
  font-weight: bold;
`;

export const CartItemInfoTopWrapper = styled.div`
  padding-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;
  gap: 16px;
`;

export const CartItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const CartItemInfoBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemActionsButtonWrapper = styled.button`
  display: flex;
  gap: 11px;
  align-items: center;

  @media screen and (${theme.breakpoints.lg}) {
    padding-left: 3.6px;
    gap: 11.7px;
    margin-top: -0.9px;
  }
`;

export const CartItemActionButton = styled.button`
  width: 18px;
  height: 18px;
`;

export const CartItemQuantityInput = styled.input`
  border: 1px solid ${theme.colors.lightGray};
  font-size: 14px;
  color: ${theme.colors.darkGray};
  width: fit-content;
  padding: 3.5px 12px;
  max-width: 59px;
  border-radius: ${theme.borderRadius};
`;

export const CartItemSubTotalWrapper = styled.div`
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

export const CartItemSubTotalText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${theme.colors.gray};
  text-transform: uppercase;
`;

// Desktop Version Only components

export const CartItemDesktopWrapper = styled.div`
  display: none;
  @media screen and (${theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 444px 171px 1fr 1fr;
    padding-left: 8px;
    padding-top: 9px;
    align-items: center;
  }
`;

export const CartItemRemoveItemButtonDesktopWrapper = styled.div`
  display: none;
  @media screen and (${theme.breakpoints.lg}) {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 9px;
  }
`;
