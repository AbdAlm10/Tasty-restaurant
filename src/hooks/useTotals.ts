import { CartItem } from "../store";

const calculateTotals = (updatedCartItems: CartItem[]) => {
  const total = updatedCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const itemsTotal = updatedCartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return {
    cartItems: updatedCartItems,
    total,
    itemsTotal,
  };
};
export default calculateTotals;
