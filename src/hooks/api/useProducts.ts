import { useEffect, useState } from "react";
import { Product } from "../../@types";

export default function useProducts() {
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

  return {
    products,
    isLoading,
  };
}

async function getProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  return data;
}
