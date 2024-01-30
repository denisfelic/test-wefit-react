import ProductList from "../components/ProductList";
import Layout from "../components/Layout";
import useProducts from "../hooks/api/useProducts";

export default function HomePage() {
  const { isLoading, products } = useProducts();

  return (
    <Layout isLoading={isLoading}>
      <Layout.ContentWrapper>
        <ProductList products={products ?? []} />
      </Layout.ContentWrapper>
    </Layout>
  );
}
