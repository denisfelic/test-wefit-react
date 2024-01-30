import styled from "styled-components";
import { Product } from "../@types";
import theme from "../styles/theme";

const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 10px 11px;
`;

const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardImage = styled.img`
  width: 147px;
  height: 188px;
  object-fit: cover;
`;

const CardTitle = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${theme.colors.black};
`;

const CardPrice = styled.span`
  font-weight: bold;
  color: ${theme.colors.darkGray};
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  margin-top: 7px;
  margin-bottom: 8px;
`;

const CardButtonWrapper = styled.button`
  display: flex;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      <CardContainerWrapper>
        {products.map((product) => (
          <CardWrapper key={product.id}>
            <CardImage src={product.image} alt="" />
            <div>
              <CardInfoWrapper>
                <CardTitle>{product.title}</CardTitle>
                <CardPrice>{product.price}</CardPrice>
              </CardInfoWrapper>
              <CardButtonWrapper>Adicionar ao carrinho</CardButtonWrapper>
            </div>
          </CardWrapper>
        ))}
      </CardContainerWrapper>
    </div>
  );
}
