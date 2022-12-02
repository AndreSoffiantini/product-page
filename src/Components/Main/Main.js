import "./Main.css";
import { useContext, useState } from "react";
import CartSetterContext from "../../Context/Cart/CartSetterContext";
import CartContext from "../../Context/Cart/CartContext";

const Main = () => {
  const { addToCart } = useContext(CartSetterContext);
  const { cartItems } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState({
    id: 1,
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers ...",
    price: 125,
    discountPercentage: 0.5,
    quantity: 1,
  });

  /* const [selectedProduct, dispatch] = useReducer(CartReducer, {
    ...products[selected],
    quantity: 0,
  }); */

  const handleAddToCart = () => {
    const newProduct = { ...product };
    newProduct.quantity = quantity;
    addToCart(newProduct);
  };

  return (
    <main className="main_content">
      <div className="cart_details">
        <h2>Cart</h2>
        <hr></hr>
        <div className="text">{product.title}</div>
        <div className="text">{cartItems[0]?.quantity}</div>
      </div>

      <h1 className="title">{product.title}</h1>

      <p className="text">{product.description}</p>

      <button className="btn" onClick={() => handleAddToCart()}>
        Add to cart
      </button>

      <button className="btn" onClick={() => setQuantity((q) => q + 1)}>
        +
      </button>
      <button className="btn" onClick={() => setQuantity((q) => q - 1)}>
        -
      </button>

      <h1>{quantity}</h1>
    </main>
  );
};

export default Main;
