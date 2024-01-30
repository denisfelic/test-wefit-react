import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../App";
import EmptyCart from "../components/EmptyCart";
import Layout from "../components/Layout";
import useCart from "../contexts/CartContextProvider/useCart";
import CartCheckout from "../features/CartCheckout";

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
          <EmptyCart
            title="Compra realizada com sucesso!"
            image={{
              src: "/svg/success-checkout.svg",
              alt: "Success Checkout",
              style: {
                padding: "0 24px",
              },
            }}
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
