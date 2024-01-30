import { createContext, useEffect, useMemo, useState } from "react";
import { Product } from "../../@types";

export interface ICartItemProps {
  product: Product;
  quantity: number;
}

interface ICartContextProps {
  cartProducts: ICartItemProps[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  decrementProductQuantity: (product: Product) => void;
  updateProductQuantity: (product: Product, quantity: number) => void
  clearCart: () => void;
  totalOfItemsInCart: number;
}
export const CartContext = createContext({} as ICartContextProps);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<ICartItemProps[]>([]);

  const totalOfItemsInCart = useMemo(
    () => cartProducts.reduce((acc, curr) => (acc += curr.quantity), 0),
    [cartProducts]
  );

  const addProductToCart = (product: Product) => {
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

  const removeProductFromCart = (product: Product) => {
    let updatedCart = cartProducts.filter((p) => p.product.id !== product.id);
    setCartProducts(updatedCart);
    saveCardInStorage(updatedCart);
  };

  const clearCart = () => {
    setCartProducts([]);
    saveCardInStorage([]);
  };

  const saveCardInStorage = (updatedCartProducts: ICartItemProps[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCartProducts));
  };

  const getCartFromStorage = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartProducts(JSON.parse(cart));
    }
  };

  const decrementProductQuantity = (product: Product) => {
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

  const updateProductQuantity = (product: Product, quantity: number) => {
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
        updateProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
