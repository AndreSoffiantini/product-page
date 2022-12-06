import "./MainMobile.css";
import { useContext, useState } from "react";
import classnames from "classnames";
import CartSetterContext from "../../../Context/Cart/CartSetterContext";
import CartContext from "../../../Context/Cart/CartContext";

import deleteIcon from "../../../images/icon-delete.svg";
import cart from "../../../images/icon-cart.svg";
import productThumbnail from "../../../images/image-product-1-thumbnail.jpg";
import plus from "../../../images/icon-plus.svg";
import minus from "../../../images/icon-minus.svg";
import previous from "../../../images/icon-previous.svg";
import next from "../../../images/icon-next.svg";

const Main = () => {
  const { addToCart, removeFromCart } = useContext(CartSetterContext);
  const { cartItems, isCartOpen } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [productNumber, setProductNumber] = useState(1);

  const [product] = useState({
    id: 1,
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125.0,
    discountPercentage: 0.5,
    quantity: 1,
  });

  const handleAddToCart = () => {
    const newProduct = { ...product };
    newProduct.quantity = quantity;
    addToCart(newProduct);
  };

  const handleArrowClick = (scroll_direction) => {
    switch (scroll_direction) {
      case "next":
        if (productNumber < 4) {
          setProductNumber(productNumber + 1);
        } else {
          setProductNumber(1);
        }

        break;

      case "previous":
        if (productNumber > 1) {
          setProductNumber(productNumber - 1);
        } else {
          setProductNumber(4);
        }

        break;

      default:
        break;
    }
  };

  return (
    <main className="main_content">
      <div
        className="product_image"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/product-images/image-product-" +
            productNumber.toString() +
            ".jpg"
          })`,
        }}
      >
        <div
          className={classnames("arrows_container", { visible: !isCartOpen })}
        >
          <button className="arrow">
            <img
              src={previous}
              alt="previous"
              onClick={() => handleArrowClick("previous")}
            />
          </button>
          <button className="arrow">
            <img
              src={next}
              alt="next"
              onClick={() => handleArrowClick("next")}
            />
          </button>
        </div>

        <div className={classnames("cart_section", { visible: isCartOpen })}>
          <div className="cart_header">
            <span style={{ fontWeight: "bold" }}>Cart</span>
          </div>

          <div className="cart_main">
            {cartItems?.length ? (
              <>
                <div className="cart_product_details">
                  <img
                    className="product_thumbnail"
                    src={productThumbnail}
                    alt={cartItems[0]?.title + " thumbnail"}
                  />
                  <div className="cart_product_info">
                    <div className="text">{cartItems[0]?.title}</div>
                    <div
                      style={{
                        marginRight: "5px",
                        display: "inline-block",
                        color: "hsl(219, 9%, 45%)",
                      }}
                    >
                      ${cartItems[0]?.price.toFixed(2)} x{" "}
                      {cartItems[0]?.quantity}
                    </div>
                    <div
                      style={{ fontWeight: "bold", display: "inline-block" }}
                    >
                      $
                      {(cartItems[0]?.price * cartItems[0]?.quantity).toFixed(
                        2
                      )}
                    </div>
                  </div>

                  <img
                    src={deleteIcon}
                    alt="delete"
                    className="delete_icon"
                    onClick={() => removeFromCart(product)}
                  />
                </div>

                <button className="large_btn"> Checkout</button>
              </>
            ) : (
              <div className="empty_cart_message">Your cart is empty.</div>
            )}
          </div>
        </div>
      </div>

      <div className="product_section">
        <div className="title_company">{product.company}</div>
        <h1 className="title">{product.title}</h1>
        <p className="text">{product.description}</p>

        <div className="price_section">
          <h1>${product.price.toFixed(2)}</h1>
          <div className="discount_percentage">
            {product.discountPercentage * 100}%
          </div>
          <div className="original_price">
            ${(product.price / product.discountPercentage).toFixed(2)}
          </div>
        </div>

        <div className="buttons_section">
          <button
            className="btn"
            onClick={() =>
              setQuantity((q) => {
                if (q > 1) {
                  return q - 1;
                } else return q;
              })
            }
          >
            <img src={minus} alt="minus" />
          </button>

          <div style={{ fontWeight: "bold" }}>{quantity}</div>

          <button className="btn" onClick={() => setQuantity((q) => q + 1)}>
            <img src={plus} alt="plus" />
          </button>
        </div>

        <button className="large_btn" onClick={() => handleAddToCart()}>
          <img src={cart} alt="cart" />
          Add to cart
        </button>
      </div>
    </main>
  );
};

export default Main;
