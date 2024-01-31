import styled from "styled-components";
import theme from "../../../styles/theme";
import { DefaultButtonStyles } from "../../Button";

export const CartCheckoutContainerWrapper = styled.div`
  flex: 1;
  display: flex;

  @media screen and (${theme.breakpoints.lg}) {
    max-width: ${theme.container};
    margin: 0 auto;
    width: 100%;
  }
`;

export const CartCheckoutSubContainerWrapper = styled.div`
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

export const CartCheckoutItemsWrapper = styled.ul`
  flex: 1;
  height: 80%;
`;

export const CartCheckoutItemsScroll = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;
  overflow-y: scroll;
  max-height: 75.9vh;
  padding: 16px;
  padding-bottom: 19px;

  @media screen and (${theme.breakpoints.lg}) {
    max-height: 55.9vh;
  }
`;

export const CartCheckoutBottomWrapper = styled.div`
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

export const CartCheckoutTotalTextWrapper = styled.div`
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

export const CartCheckoutTotalTextLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.gray};
  text-transform: uppercase;
`;

export const CartCheckoutTotalTextValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.darkGray};
  text-transform: uppercase;
`;

export const CartCartCheckoutButtonWrapper = styled.div`
  @media screen and (${theme.breakpoints.lg}) {
    padding-left: 8px;
  }
`;

// Desktop Version Only components
export const CartCheckoutItemsHeaderContainer = styled.div`
  display: none;

  @media screen and (${theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 444px 171px 1fr;
    padding-top: 27.3px;
    padding-left: 25.3px;
  }
`;

export const CartCheckoutItemsHeaderItem = styled.li`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.gray};
  text-transform: uppercase;
`;

export const CheckoutHr = styled.hr`
  border: 1px solid ${theme.colors.lightGray};
  margin: 0 24px;
`;

export const CartCheckoutButton = styled.button`
  ${DefaultButtonStyles}

  @media screen and (${theme.breakpoints.lg}) {
    padding: 13px 52.3px;
  }
`;
