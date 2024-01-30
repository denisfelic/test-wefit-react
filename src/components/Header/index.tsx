import styled from "styled-components";
import theme from "../../styles/theme";
import { useEffect, useState } from "react";
import { Product } from "../../@types/index";
const HeaderTitle = styled.a`
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: bold;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 18px 10px;
  justify-content: space-between;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CartCount = styled.span`
  color: ${theme.colors.gray};
  font-size: 12px;
  font-weight: 600;
`;


export default function Header() {
  
  return (
    <HeaderContainer>
      <HeaderTitle>WeMovies</HeaderTitle>
      <CartContainer>
        <CartCount>0 items</CartCount>
        <img src={"/public/cart.svg"} alt="My SVG" />
      </CartContainer>
    </HeaderContainer>
  );
}
