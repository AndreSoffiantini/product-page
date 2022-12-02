const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (
        !state.cartItems.find((product) => product.id === action.payload.id)
      ) {
        const newCartItems = [...state.cartItems, action.payload];
        return { ...state, cartItems: newCartItems };
      } else {
        const newCartItems = state.cartItems.map((product) => {
          if (product.id === action.payload.id) {
            const newProduct = { ...product };
            newProduct.quantity += action.payload.quantity;
            return newProduct;
          } else {
            return product;
          }
        });

        return { ...state, cartItems: newCartItems };
      }

    default:
      return state;
  }
};

export default CartReducer;
