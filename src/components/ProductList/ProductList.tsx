import { Product } from "../../@types";
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
  return (
    <div>
      <CardContainerWrapper>
        {products.map((product) => (
          <CardWrapper key={product.id}>
            <CardImage src={product.image} alt="" />
            <CardBodyWrapper>
              <CardInfoWrapper>
                <CardTitle>{product.title}</CardTitle>
                <CardPrice>R$ {product.price.toFixed(2)}</CardPrice>
              </CardInfoWrapper>
              <CardButtonWrapper>
                <CartButtonIconWrapper>
                  <img src="/public/svg/cart-icon.svg" />
                  <CartButtonText style={{ fontWeight: 400 }}>0</CartButtonText>
                </CartButtonIconWrapper>
                <CartButtonText>Adicionar ao carrinho</CartButtonText>
              </CardButtonWrapper>
            </CardBodyWrapper>
          </CardWrapper>
        ))}
      </CardContainerWrapper>
    </div>
  );
}
