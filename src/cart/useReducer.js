//takes current state and action obj ==> returns updated state
//reducer fn has to be 'PURE' function
export default function cartReducer(state, action) {
    if (action.type === "ADD_TO_CART") {
      let data = {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
        cart: [...state.cart, {
          ...state.products.find((product) => product.id === action.id),
          inCart: true,
        }],
      };
      return data;
    } else if (action.type === "REMOVE_FROM_CART") {
      return {
        ...state,
        products: [...state.products, {
          ...state.cart.find((product) => product.id === action.id),
          inCart: false,
        }],
        cart: state.cart.filter((product) => product.id !== action.id),
      };
    } else if (action.type === "LOAD_PRODUCTS") {
      return {
        ...state,
        products: action.products,
      };
    } else {
      return state;
    }
  }