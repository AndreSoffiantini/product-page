import { useReducer, useState } from "react";
import CartContext from "./CartContext";
import CartSetterContext from "./CartSetterContext";
import CartReducer from "./CartReducer";

const initialState = {
  cartItems: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        isCartOpen,
      }}
    >
      <CartSetterContext.Provider
        value={{ addToCart, removeFromCart, setIsCartOpen }}
      >
        {children}
      </CartSetterContext.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;
