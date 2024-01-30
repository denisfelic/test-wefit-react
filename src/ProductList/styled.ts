import styled from "styled-components";
import theme from "../styles/theme";

export const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
`;

export const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardImage = styled.img`
  width: 147px;
  height: 188px;
  object-fit: cover;
`;

export const CardBodyWrapper = styled.div`
  width: 100%;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 12px;
`;

export const CardTitle = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${theme.colors.black};
`;

export const CardPrice = styled.span`
  font-weight: bold;
  color: ${theme.colors.darkGray};
`;



export const CartButtonIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

