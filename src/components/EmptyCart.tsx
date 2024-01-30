import styled from "styled-components";
import theme from "../styles/theme";
import Button from "./Button";

const EmptyCardContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const EmptyCardText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.darkGray};
  text-align: center;
  padding: 59.4px 64px 0 64px;
  line-height: 23px;
`;

const EmptyCardButtonWrapper = styled.div`
  padding: 6px 81.5px 64px 81.5px;
`;

export default function EmptyCart({ onGoBack }: { onGoBack?: () => void }) {
  return (
    <EmptyCardContainer>
      <EmptyCardText>
        Parece que não <br />
        há nada por aqui :(
      </EmptyCardText>
      <img src="/svg/empty-cart.svg" alt="Empty Cart" />
      <EmptyCardButtonWrapper>
        <Button onClick={onGoBack}>
          <Button.Text size="medium">Voltar</Button.Text>
        </Button>
      </EmptyCardButtonWrapper>
    </EmptyCardContainer>
  );
}
