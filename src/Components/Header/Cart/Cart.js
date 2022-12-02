import "./Cart.css";

import cart from "../../../images/icon-cart.svg";

const Cart = () => {
  const showCart = () => {
    console.log("show");
    //mostrare cart vuoto se cartItems è vuoto
  };

  return (
    <>
      <img src={cart} alt="cart" onClick={() => showCart()} />
    </>
  );
};

export default Cart;
