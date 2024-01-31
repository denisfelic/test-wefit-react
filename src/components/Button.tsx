import styled from "styled-components";
import theme from "../styles/theme";

interface IButtonProps extends CardButtonProps {}

export interface CardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "green" | "blue";
  fitContent?: boolean;
}
export const CardButtonWrapper = styled.button<CardButtonProps>`
  display: flex;
  color: ${theme.colors.white};
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 11px 10.53px;
  justify-content: center;
  border-radius: 4px;
  background-color: ${(props) => {
    return props.color === "green" ? theme.colors.green : theme.colors.blue;
  }};
  position: relative;
  padding: 13px 10.53px;
  justify-content: center;
  text-align: center;

  @media screen and (${theme.breakpoints.lg}) {
    min-width: ${(props) => (props.fitContent ?  "fit-content": "100%" )};
    width: ${(props) => (props.fitContent ?  "fit-content": "100%" )};
    padding: 13px 20.3px;
  }
`;

interface CartButtonTextProps {
  size?: "small" | "medium";
}
export const CartButtonText = styled.span<CartButtonTextProps>`
  display: flex;
  min-width: min-content;
  text-transform: uppercase;
  font-size: ${(props) => (props.size == "medium" ? "14px" : "12px")};
  font-weight: bold;
  @media screen and (${theme.breakpoints.lg}) {
    /* padding: 0px 32px; */
  }
`;

export default function Button({ children, ...props }: IButtonProps) {
  return <CardButtonWrapper {...props}>{children}</CardButtonWrapper>;
}

Button.Text = CartButtonText;
