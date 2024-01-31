import { Link } from "react-router-dom";
import { routes } from "../../App";
import useCart from "../../contexts/CartContextProvider/useCart";
import {
  HeaderCartContainer,
  HeaderCartCount,
  HeaderCartInfoContainer,
  HeaderCartLabelText,
  HeaderContainer,
  HeaderTitle,
} from "./styled";

export default function Header() {
  const { totalOfItemsInCart } = useCart();

  return (
    <HeaderContainer>
      <Link to={routes.home}>
        <HeaderTitle>WeMovies</HeaderTitle>
      </Link>
      <Link to={routes.cart}>
        <HeaderCartContainer>
          <HeaderCartInfoContainer>
            <HeaderCartLabelText>Meu Carrinho</HeaderCartLabelText>
            <HeaderCartCount>
              {totalOfItemsInCart} {totalOfItemsInCart === 1 ? "item" : "itens"}
            </HeaderCartCount>
          </HeaderCartInfoContainer>
          <img src={"/cart.svg"} alt="Carrinho de compras" />
        </HeaderCartContainer>
      </Link>
    </HeaderContainer>
  );
}
