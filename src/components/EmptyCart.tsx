import { HtmlHTMLAttributes } from "react";
import styled, { CSSProperties, css } from "styled-components";
import theme from "../styles/theme";
import Button from "./Button";

const EmptyCardContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
`;

const EmptyCardText = css`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.darkGray};
  text-align: center;
  padding: 59.4px 64px 0 64px;
  line-height: 23.2px;

  @media screen and (${theme.breakpoints.lg}) {
    padding-top: 69px;
    line-height: 23px;
  }
`;

const EmptyCardTextMobile = styled.div`
  ${EmptyCardText}
  display: block;

  @media screen and (${theme.breakpoints.lg}) {
    display: none;
  }
`;

const EmptyCardTextDesktop = styled.div`
  ${EmptyCardText}
  display: none;
  @media screen and (${theme.breakpoints.lg}) {
    display: block;
  }
`;

const EmptyCardButtonWrapper = styled.div`
  padding: 6px 81.5px 64px 81.5px;

  @media screen and (${theme.breakpoints.lg}) {
    padding: 0px;
    max-width: 180px;
    width: 100%;
    margin: 6.5px auto 64px auto;
  }
`;

const MobileImage = styled.img`
  display: block;
  @media screen and (${theme.breakpoints.lg}) {
    display: none;
  }
`;

const DesktopImage = styled.img`
  display: none;
  @media screen and (${theme.breakpoints.lg}) {
    display: block;
    margin: 0 auto;
    margin-top: 12px;
    max-width: 470.6px;
  }
`;

export default function EmptyCart({
  title,
  image,
  buttonProps,
}: {
  title: {
    mobile: string | React.ReactNode;
    desktop: string | React.ReactNode;
  };
  image: {
    src: {
      mobile: string;
      desktop: string;
    };
    alt?: string;
    style?: CSSProperties;
  };
  buttonProps: HtmlHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <EmptyCardContainer>
      <EmptyCardTextDesktop>{title.desktop}</EmptyCardTextDesktop>
      <EmptyCardTextMobile>{title.mobile}</EmptyCardTextMobile>
      <MobileImage src={image.src.mobile} alt={image?.alt} />
      <DesktopImage src={image.src.desktop} alt={image?.alt} />
      <EmptyCardButtonWrapper>
        <Button onClick={buttonProps?.onClick}>
          <Button.Text size="medium">{buttonProps.children}</Button.Text>
        </Button>
      </EmptyCardButtonWrapper>
    </EmptyCardContainer>
  );
}
