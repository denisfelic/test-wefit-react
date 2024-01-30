
import { Product } from "../@types";
import useCart from "../contexts/CartContextProvider/useCart";
import {
  CardBodyWrapper,
  CardButtonWrapper,
  CardContainerWrapper,
  CardImage,
  CardInfoWrapper,
  CardPrice,
  CardTitle,
  CardWrapper,
  CartButtonIconWrapper,
  CartButtonText,
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
                  <CardPrice>R$ {product.price.toFixed(2)}</CardPrice>
                </CardInfoWrapper>
                <CardButtonWrapper
                  onClick={() => {
                    addProductToCart(product);
                  }}
                  color={cartProduct?.quantity ? "green" : "blue"}
                >
                  <CartButtonIconWrapper>
                    <img src="/svg/cart-icon.svg" />
                    <CartButtonText style={{ fontWeight: 400 }}>
                      {cartProduct?.quantity ?? 0}
                    </CartButtonText>
                  </CartButtonIconWrapper>
                  <CartButtonText>Adicionar ao carrinho</CartButtonText>
                </CardButtonWrapper>
              </CardBodyWrapper>
            </CardWrapper>
          );
        })}
      </CardContainerWrapper>
    </div>
  );
}
