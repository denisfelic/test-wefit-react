import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "./@types";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import ProductList from "./components/ProductList/ProductList";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

async function getProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  return data;
}

const ContentWrapper = styled.div`
  flex: 1;
  padding: 0 16px;
`;

export default function App() {
  const [products, setProducts] = useState<Product[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <>
      <Layout>
        <Header />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ContentWrapper>
            <ProductList products={products ?? []} />
          </ContentWrapper>
        )}
      </Layout>
    </>
  );
}
