import { createContext, useEffect, useMemo, useState } from "react";
import { ICartContextProps, ICartItemProps, IProduct } from "./types";

export const CartContext = createContext({} as ICartContextProps);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<ICartItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const totalOfItemsInCart = useMemo(
    () => cartProducts.reduce((acc, curr) => (acc += curr.quantity), 0),
    [cartProducts]
  );

  const addProductToCart = (product: IProduct) => {
    const productInCart = cartProducts.find((p) => p.product.id === product.id);

    let updatedCart: ICartItemProps[] = [];

    if (!productInCart) {
      updatedCart = [...cartProducts, { product, quantity: 1 }];
      setCartProducts(updatedCart);
    } else {
      updatedCart = cartProducts.map((p) => {
        if (p.product.id === product.id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });

      setCartProducts(updatedCart);
    }

    saveCardInStorage(updatedCart);
  };

  const removeProductFromCart = (product: IProduct) => {
    let updatedCart = cartProducts.filter((p) => p.product.id !== product.id);
    setCartProducts(updatedCart);
    saveCardInStorage(updatedCart);
  };

  const clearCart = () => {
    setCartProducts([]);
    saveCardInStorage([]);
  };

  const saveCardInStorage = (updatedCartProducts: ICartItemProps[]) => {
    try {
      localStorage.setItem("cart", JSON.stringify(updatedCartProducts));
    } catch (error) {
      console.error(error);
    }
  };

  const getCartFromStorage = () => {
    try {
      setIsLoading(true);
      const cart = localStorage.getItem("cart");
      if (cart) {
        setCartProducts(JSON.parse(cart));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const decrementProductQuantity = (product: IProduct) => {
    const updatedCart = cartProducts.map((p) => {
      if (p.product.id === product.id) {
        return {
          ...p,
          quantity: p.quantity - 1,
        };
      }
      return p;
    });
    setCartProducts(updatedCart);
    saveCardInStorage(updatedCart);
  };

  const updateProductQuantity = (product: IProduct, quantity: number) => {
    const updatedCart = cartProducts.map((p) => {
      if (p.product.id === product.id) {
        return {
          ...p,
          quantity,
        };
      }
      return p;
    });
    setCartProducts(updatedCart);
    saveCardInStorage(updatedCart);
  };

  useEffect(() => {
    getCartFromStorage();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        totalOfItemsInCart,
        decrementProductQuantity,
        updateProductQuantity,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
