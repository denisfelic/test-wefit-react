import { useEffect, useState } from "react";
import { IProduct } from "../../contexts/CartContextProvider/types";
import { api } from "../../lib/axios";

export default function useProducts() {
  const [products, setProducts] = useState<IProduct[] | undefined>([]);
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
  const response = await api.get("/products");
  return response.data;
}
