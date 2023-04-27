import React, { useEffect, useState, useReducer, createContext, useContext } from "react";
import cartReducer from "./useReducer";

//action = {type: 'ADD_TO_CART', id}
//action = {type: 'REMOVE_FROM_CART', id}
//state = {products: [], cart: []}

const CartContext = createContext();

function Btns ({inCart, id}) {
  const { dispatch } = useContext(CartContext);
  // console.log(value);
  return(
    <button
        onClick={() => {
          if (inCart) {
            dispatch({
              type: "REMOVE_FROM_CART",
              id,
            });
          }
           else {
            dispatch({
              type: "ADD_TO_CART",
              id,
            });
           }
        }}
      >
        {inCart ? "Remove From Cart" : "Add To Cart"}
      </button>
  )
}

function Product({ product }) {
  const { id, image, title, price, inCart } = product;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 50px 100px",
        height: "80px",
      }}
    >
      <img
        src={image}
        alt="Image..."
        style={{ width: "100%", height: "100%" }}
      />
      <p>{title}</p>
      <p>{price}</p>
      <Btns inCart={inCart} id={id}/>
    </div>
  );
}

// function useReducer(operationFn, initialState) {
//   const [state, setState] = useState(initialState);

//   function dispatch(action) {
//     setState(operationFn(state, action));
//   }

//   return [state, dispatch];
// }

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  // setIsLoading(null)
  const [state, dispatch] = useReducer(cartReducer, { products: [], cart: [] });
  const { cart, products } = state;
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function loadData() {
      let products = [];
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        products = data.slice(0, 4);
        dispatch({ type: "LOAD_PRODUCTS", products });
      } catch (e) {
        products = [];
      }
      setIsLoading(false);
      // fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => setProducts(data));
    }
    loadData();
  }, []);

  return (
    <CartContext.Provider value={{dispatch}}>
    <div>
      <h1>Products</h1>
      {isLoading ? (
        <h3 style={{ color: "red" }}>Loading...</h3>
      ) : state.products.length ? (
        state.products.map((product) => (
          <Product
            product={product}
            key={product.id}
            // dispatch={dispatch}
          />
        ))
      ) : (
        <h3>No products</h3>
      )}
      <h1>My cart</h1>
      {cart.length &&
        cart.map((product) => (
          <Product
            product={product}
            key={product.id}
            dispatch={dispatch}
          />
        ))}
    </div>
    </CartContext.Provider>
  );
};

export default Cart;

//Fetch Api
//XMLHTTPRequest  ()
//Third party ==> axios

// console.log
// fetch
// setTimeout
// setInterval

//asunc ==> event queue ===> event loop ==> stack empty => stack

//fundamental hooks
// 1) useState
// 2) useEffect
// 3) useContext

//custom/composite hook/can be user defined
// 1) useReducer

//Number, String, Booolean ===> primitive
//Array, Object ==> derived datatype
//class

//HashMap ==>  re-created/re-implemented
//new HashMap()

//Cart
