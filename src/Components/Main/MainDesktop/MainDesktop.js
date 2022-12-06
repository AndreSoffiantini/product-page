import "./MainDesktop.css";
import { useContext, useState } from "react";
import classnames from "classnames";
import CartSetterContext from "../../../Context/Cart/CartSetterContext";
import CartContext from "../../../Context/Cart/CartContext";

import deleteIcon from "../../../images/icon-delete.svg";
import cart from "../../../images/icon-cart.svg";
import productThumbnail from "../../../images/image-product-1-thumbnail.jpg";
import plus from "../../../images/icon-plus.svg";
import minus from "../../../images/icon-minus.svg";

const Main = () => {
  const { addToCart, removeFromCart } = useContext(CartSetterContext);
  const { cartItems, isCartOpen } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [productNumber, setProductNumber] = useState(1);

  const thumbnailsIndex = [1, 2, 3, 4];

  const [product] = useState({
    id: 1,
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    price: 125.0,
    discountPercentage: 0.5,
    quantity: 1,
  });

  const handleAddToCart = () => {
    const newProduct = { ...product };
    newProduct.quantity = quantity;
    addToCart(newProduct);
  };

  const handleSliderClick = (thumbnail_index) => {
    setProductNumber(thumbnail_index);
  };

  return (
    <main className="main_content_desktop">
      <div
        className={classnames("cart_section_desktop", { visible: isCartOpen })}
      >
        <h2>Cart</h2>
        <hr></hr>

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
                <span style={{ marginRight: "5px" }}>
                  ${cartItems[0]?.price.toFixed(2)} x {cartItems[0]?.quantity}
                </span>
                <span style={{ fontWeight: "bold" }}>
                  ${(cartItems[0]?.price * cartItems[0]?.quantity).toFixed(2)}
                </span>
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
          <div className="empty_cart_message">Your cart is empty</div>
        )}
      </div>

      <div className="main_content_desktop_container">
        <div className="main_content_desktop_left">
          <div
            className="product_image_desktop"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "/product-images/image-product-" +
                productNumber.toString() +
                ".jpg"
              })`,
            }}
          ></div>

          <div className="slider_desktop">
            {thumbnailsIndex.map((index) => (
              <button
                className="product_thumbnail_desktop"
                onClick={() => handleSliderClick(index)}
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL +
                    "/product-images/image-product-" +
                    index.toString() +
                    "-thumbnail.jpg"
                  })`,
                }}
              ></button>
            ))}
          </div>
        </div>

        <div className="main_content_desktop_right">
          <div className="product_section">
            <div className="title_company">{product.company}</div>
            <h1 className="title">{product.title}</h1>
            <h1>Desktop</h1>
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

              <div>{quantity}</div>

              <button className="btn" onClick={() => setQuantity((q) => q + 1)}>
                <img src={plus} alt="plus" />
              </button>
            </div>

            <button className="large_btn" onClick={() => handleAddToCart()}>
              <img src={cart} alt="cart" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
