import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../App";
import GenericCardWithImage from "../components/GenericCardWithImage";
import Layout from "../components/Layout";
import useCart from "../contexts/CartContextProvider/useCart";
import CartCheckout from "../features/CartCheckout";
import styled from "styled-components";
import theme from "../styles/theme";

const MobileImage = styled.img`
  display: block;
  padding: 0 24px;
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

export default function CartPage() {
  const { isLoading: cartIsLoading } = useCart();
  const [processingCheckout, setProcessingCheckout] = useState(false);
  const navigate = useNavigate();

  const [showSuccessCheckout, setShowSuccessCheckout] = useState(false);

  const { clearCart } = useCart();

  const fakeApiCall = async () => {
    try {
      setProcessingCheckout(true);
      clearCart();
      setShowSuccessCheckout(true);

      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve("success");
        }, 1200);
      });
      return response;
    } catch (error) {
      console.error(error);
    } finally {
      setProcessingCheckout(false);
    }
  };
  return (
    <Layout isLoading={cartIsLoading || processingCheckout}>
      <Layout.ContentWrapper>
        {showSuccessCheckout ? (
          <GenericCardWithImage
            title={{
              mobile: "Compra realizada com sucesso!",
              desktop: "Compra realizada com sucesso!",
            }}
            image={
              <>
                <MobileImage src={"/svg/success-checkout.svg"} />
                <DesktopImage src={"/svg/success-checkout.svg"} />
              </>
            }
            buttonProps={{
              onClick: () => {
                navigate(routes.home);
              },
              children: "Voltar",
            }}
          />
        ) : (
          <CartCheckout
            onProceedCheckout={() => {
              fakeApiCall();
            }}
          />
        )}
      </Layout.ContentWrapper>
    </Layout>
  );
}
