import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const GenericCardWithImageWrapper = styled.div`
  max-width: ${theme.container};
  margin: 0 auto;
  width: 100%;
`;

export const GenericCardWithImageSubWrapper = styled.div`
  @media screen and (${theme.breakpoints.lg}) {
    margin-left: -11px;
    padding-right: 11px;
  }
`;

export const GenericCardWithImageContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
`;

export const GenericCardWithImageText = css`
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

export const GenericCardWithImageTextMobile = styled.div`
  ${GenericCardWithImageText}
  display: block;

  @media screen and (${theme.breakpoints.lg}) {
    display: none;
  }
`;

export const GenericCardWithImageTextDesktop = styled.div`
  ${GenericCardWithImageText}
  display: none;
  @media screen and (${theme.breakpoints.lg}) {
    display: block;
  }
`;

export const GenericCardWithImageButtonWrapper = styled.div`
  padding: 6px 81.5px 64px 81.5px;

  @media screen and (${theme.breakpoints.lg}) {
    padding: 0px;
    max-width: 180px;
    width: 100%;
    margin: 6.5px auto 64px auto;
  }
`;
