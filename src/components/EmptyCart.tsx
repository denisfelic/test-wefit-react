import styled, { CSSProperties } from "styled-components";
import theme from "../styles/theme";
import Button from "./Button";
import { HtmlHTMLAttributes } from "react";

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

export default function EmptyCart({
  title,
  image,
  buttonProps,
}: {
  title: string | React.ReactNode;
  image: {
    src: string;
    alt?: string;
    style?: CSSProperties;
  };
  buttonProps: HtmlHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <EmptyCardContainer>
      <EmptyCardText>{title}</EmptyCardText>
      <img src={image.src} alt={image?.alt} style={image?.style} />
      <EmptyCardButtonWrapper>
        <Button onClick={buttonProps?.onClick}>
          <Button.Text size="medium">{buttonProps.children}</Button.Text>
        </Button>
      </EmptyCardButtonWrapper>
    </EmptyCardContainer>
  );
}
