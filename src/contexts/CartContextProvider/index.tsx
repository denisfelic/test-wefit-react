import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../../@types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface ICartContextProps {
  cartProducts: CartItem[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  clearCart: () => void;
}
export const CartContext = createContext({} as ICartContextProps);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  const addProductToCart = (product: Product) => {
    const productInCart = cartProducts.find((p) => p.product.id === product.id);

    let updatedCart: CartItem[] = [];

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

  const saveCardInStorage = (updatedCartProducts: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCartProducts));
  };

  const getCartFromStorage = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartProducts(JSON.parse(cart));
    }
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

