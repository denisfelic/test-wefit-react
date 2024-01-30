import { Product } from "../@types";
import Button from "../components/Button";
import useCart from "../contexts/CartContextProvider/useCart";
import { displayMoneyValueFormatted } from "../helpers/displayMoneyValueFormatted";
import {
  CardBodyWrapper,
  CardContainerWrapper,
  CardImage,
  CardInfoWrapper,
  CardPrice,
  CardTitle,
  CardWrapper,
  CartButtonIconWrapper,
} from "./styled";

export default function ProductList({ products }: { products: Product[] }) {
  const { addProductToCart, cartProducts } = useCart();

  const productInCart = (product: Product) =>
    cartProducts.find((p) => p.product.id === product.id);
  return (
    <div>
      <CardContainerWrapper>
        {products.map((product) => {
          const cartProduct = productInCart(product);
          return (
            <CardWrapper key={product.id}>
              <CardImage src={product.image} alt="" />
              <CardBodyWrapper>
                <CardInfoWrapper>
                  <CardTitle>{product.title}</CardTitle>
                  <CardPrice>R$ {displayMoneyValueFormatted(product.price)}</CardPrice>
                </CardInfoWrapper>
                <Button
                  onClick={() => {
                    addProductToCart(product);
                  }}
                  color={cartProduct?.quantity ? "green" : "blue"}
                >
                  <CartButtonIconWrapper>
                    <img src="/svg/cart-icon.svg" />
                    <Button.Text style={{ fontWeight: 400 }}>
                      {cartProduct?.quantity ?? 0}
                    </Button.Text>
                  </CartButtonIconWrapper>
                  <Button.Text>Adicionar ao carrinho</Button.Text>
                </Button>
              </CardBodyWrapper>
            </CardWrapper>
          );
        })}
      </CardContainerWrapper>
    </div>
  );
}
