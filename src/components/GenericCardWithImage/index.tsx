import { HtmlHTMLAttributes } from "react";
import Button from "../Button";
import {
  GenericCardWithImageButtonWrapper,
  GenericCardWithImageContainer,
  GenericCardWithImageSubWrapper,
  GenericCardWithImageTextDesktop,
  GenericCardWithImageTextMobile,
  GenericCardWithImageWrapper,
} from "./styled";

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
