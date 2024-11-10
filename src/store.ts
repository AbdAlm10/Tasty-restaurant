import { create } from "zustand";

export interface CartItem {
  image: string;
  FoodName: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  total: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  decreaseItems: (name: string) => void;
}

const Store = create<CartState>((set) => ({
  cartItems: [],
  total: 0,

  addToCart: (cartItem: CartItem) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.FoodName === cartItem.FoodName
      );

      const updatedCartItems = existingItem
        ? state.cartItems.map((item) =>
            item.FoodName === cartItem.FoodName
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cartItems, { ...cartItem, quantity: 1 }];

      return {
        cartItems: updatedCartItems,
        total: updatedCartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    }),

  removeFromCart: (name: string) =>
    set((state) => {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.FoodName !== name
      );

      return {
        cartItems: updatedCartItems,
        total: updatedCartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    }),

  decreaseItems: (name: string) =>
    set((state) => {
      const updatedCartItems = state.cartItems
        .map((item) =>
          item.FoodName === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        cartItems: updatedCartItems,
        total: updatedCartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    }),
}));
export default Store;
