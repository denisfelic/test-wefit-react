import styled from "styled-components";
import theme from "../../styles/theme";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 18px 10px;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.container};
  margin: 0 auto;

  @media screen and (${theme.breakpoints.lg}) {
    padding-top: 20px;
  }
`;

export const HeaderTitle = styled.p`
  color: ${theme.colors.white};
  font-size: 20px;
  font-weight: bold;
  padding-top: 4px;
  display: block;
`;

export const HeaderCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (${theme.breakpoints.lg}) {
    gap: 10px;
  }
`;

export const HeaderCartCount = styled.span`
  color: ${theme.colors.gray};
  font-size: 12px;
  font-weight: 600;

  @media screen and (${theme.breakpoints.lg}) {
    justify-self: end;
    align-self: flex-end;
  }
`;

export const HeaderCartLabelText = styled.p`
  display: none;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.white};

  @media screen and (${theme.breakpoints.lg}) {
    display: block;
  }
`;

export const HeaderCartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (${theme.breakpoints.lg}) {
    gap: 5px;
  }
`;
