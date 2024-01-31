import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import theme from "../styles/theme";
import Button from "./Button";

const GenericCardWithImageWrapper = styled.div`
  max-width: ${theme.container};
  margin: 0 auto;
  width: 100%;
`;

const GenericCardWithImageSubWrapper = styled.div`
  @media screen and (${theme.breakpoints.lg}) {
    margin-left: -11px;
    padding-right: 11px;
  }
`;

const GenericCardWithImageContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
`;

const GenericCardWithImageText = css`
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

const GenericCardWithImageTextMobile = styled.div`
  ${GenericCardWithImageText}
  display: block;

  @media screen and (${theme.breakpoints.lg}) {
    display: none;
  }
`;

const GenericCardWithImageTextDesktop = styled.div`
  ${GenericCardWithImageText}
  display: none;
  @media screen and (${theme.breakpoints.lg}) {
    display: block;
  }
`;

const GenericCardWithImageButtonWrapper = styled.div`
  padding: 6px 81.5px 64px 81.5px;

  @media screen and (${theme.breakpoints.lg}) {
    padding: 0px;
    max-width: 180px;
    width: 100%;
    margin: 6.5px auto 64px auto;
  }
`;

export default function GenericCardWithImage({
  title,
  image,
  buttonProps,
}: {
  title: {
    mobile: string | React.ReactNode;
    desktop: string | React.ReactNode;
  };
  image: React.ReactNode;
  buttonProps: HtmlHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <GenericCardWithImageWrapper>
      <GenericCardWithImageSubWrapper>
        <GenericCardWithImageContainer>
          <GenericCardWithImageTextDesktop>
            {title.desktop}
          </GenericCardWithImageTextDesktop>
          <GenericCardWithImageTextMobile>
            {title.mobile}
          </GenericCardWithImageTextMobile>
          {image}
          <GenericCardWithImageButtonWrapper>
            <Button onClick={buttonProps?.onClick}>
              <Button.Text size="medium">{buttonProps.children}</Button.Text>
            </Button>
          </GenericCardWithImageButtonWrapper>
        </GenericCardWithImageContainer>
      </GenericCardWithImageSubWrapper>
    </GenericCardWithImageWrapper>
  );
}
