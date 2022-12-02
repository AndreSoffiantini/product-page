import { useReducer } from "react";
import CartContext from "./CartContext";
import CartSetterContext from "./CartSetterContext";
import CartReducer from "./CartReducer";

const initialState = {
  cartItems: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
      }}
    >
      <CartSetterContext.Provider value={{ addToCart }}>
        {children}
      </CartSetterContext.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;
