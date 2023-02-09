import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmont: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
