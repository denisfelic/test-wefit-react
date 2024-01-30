import styled from "styled-components";
import theme from "../styles/theme";
import useCart from "../contexts/CartContextProvider/useCart";
import { Link } from "react-router-dom";
import { routes } from "../App";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 18px 10px;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.a`
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: bold;
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
  const { cartProducts } = useCart();
  return (
    <HeaderContainer>
      <Link to={routes.home}>
        <HeaderTitle>WeMovies</HeaderTitle>
      </Link>
      <Link to={routes.cart}>
        <CartContainer>
          <CartCount>{cartProducts.length} items</CartCount>
          <img src={"/cart.svg"} alt="My SVG" />
        </CartContainer>
      </Link>
    </HeaderContainer>
  );
}
