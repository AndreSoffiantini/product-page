import "./Cart.css";
import { useContext } from "react";
import CartSetterContext from "../../../Context/Cart/CartSetterContext";
import CartContext from "../../../Context/Cart/CartContext";

import cart from "../../../images/icon-cart.svg";

const Cart = () => {
  const { setIsCartOpen } = useContext(CartSetterContext);
  const { cartItems, isCartOpen } = useContext(CartContext);

  return (
    <div className="cart_icons">
      <img src={cart} alt="cart" onClick={() => setIsCartOpen(!isCartOpen)} />
      <div className="cart_dimension">
        {cartItems?.length ? cartItems?.length * cartItems[0].quantity : null}
      </div>
    </div>
  );
};

export default Cart;
