export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}
export interface ICartItemProps {
  product: IProduct;
  quantity: number;
}

export interface ICartContextProps {
  cartProducts: ICartItemProps[];
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: (product: IProduct) => void;
  decrementProductQuantity: (product: IProduct) => void;
  updateProductQuantity: (product: IProduct, quantity: number) => void;
  clearCart: () => void;
  totalOfItemsInCart: number;
  isLoading: boolean;
}
