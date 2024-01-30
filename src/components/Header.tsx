import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../App";
import useCart from "../contexts/CartContextProvider/useCart";
import theme from "../styles/theme";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 18px 10px;
  justify-content: space-between;
  align-items: center;

  @media screen and (${theme.breakpoints.lg}) {
    padding-top: 20px;
  }
`;

const HeaderTitle = styled.p`
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: bold;
  padding-top: 4px;
  display: block;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  @media screen and (${theme.breakpoints.lg}) {
    gap: 10px;
  }
`;

const CartCount = styled.span`
  color: ${theme.colors.gray};
  font-size: 12px;
  font-weight: 600;

  @media screen and (${theme.breakpoints.lg}) {
    justify-self: end;
    align-self: flex-end;
  }
`;

const CartLabelText = styled.p`
  display: none;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.white};

  @media screen and (${theme.breakpoints.lg}) {
    display: block;
  }
`;

const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (${theme.breakpoints.lg}) {
    gap: 5px;
  }
`;

export default function Header() {
  const { totalOfItemsInCart } = useCart();

  return (
    <HeaderContainer>
      <Link to={routes.home}>
        <HeaderTitle>WeMovies</HeaderTitle>
      </Link>
      <Link to={routes.cart}>
        <CartContainer>
          <CartInfoContainer>
            <CartLabelText>Meu Carrinho</CartLabelText>
            <CartCount>
              {totalOfItemsInCart} {totalOfItemsInCart === 1 ? "item" : "itens"}
            </CartCount>
          </CartInfoContainer>
          <img src={"/cart.svg"} alt="Carrinho de compras" />
        </CartContainer>
      </Link>
    </HeaderContainer>
  );
}
