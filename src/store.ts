import { create } from "zustand";
import foodItems from "./data/FoodItems";
import calculateTotals from "./hooks/useTotals";

export interface CartItem {
  image: string;
  FoodName: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  total: number;
  itemsTotal: number;
  filteredItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  decreaseItems: (name: string) => void;
  searchFoods: (searchText: string) => void;
}

const Store = create<CartState>((set) => ({
  cartItems: [],
  total: 0,
  itemsTotal: 0,
  filteredItems: [],

  addToCart: (cartItem: CartItem) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.FoodName === cartItem.FoodName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      if (
        !updatedCartItems.find((item) => item.FoodName === cartItem.FoodName)
      ) {
        updatedCartItems.push({ ...cartItem, quantity: 1 });
      }

      return calculateTotals(updatedCartItems);
    }),

  removeFromCart: (name: string) =>
    set((state) => {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.FoodName !== name
      );
      return calculateTotals(updatedCartItems);
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
      return calculateTotals(updatedCartItems);
    }),

  searchFoods: (searchText: string) =>
    set(() => {
      const filteredItems = foodItems
        .filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((item) => ({
          image: item.src,
          FoodName: item.title,
          price: parseFloat(item.price),
          quantity: 0,
        }));

      return { filteredItems };
    }),
}));

export default Store;
