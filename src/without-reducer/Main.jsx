import React, { useEffect, useState } from "react";

function Product({ product, onClick }) {
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
      <button onClick={() => onClick(id)}>
        {inCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </div>
  );
}

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function loadData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (e) {
        setProducts([]);
      }
      setIsLoading(false);
      // fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => setProducts(data));
    }
    loadData();
  }, []);

  const addToCart = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setCart([
      ...cart,
      { inCart: true, ...products.find((product) => product.id === id) },
    ]);
  };

  const removeFromCart = (id) => {
    setProducts([
      ...products,
      { ...cart.find((product) => product.id === id), inCart: false },
    ]);
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Products</h1>
      {isLoading ? (
        <h3 style={{ color: "red" }}>Loading...</h3>
      ) : products.length ? (
        products.map((product) => (
          <Product product={product} key={product.id} onClick={addToCart} />
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
            onClick={removeFromCart}
          />
        ))}
    </div>
  );
};

export default Main;

//Fetch Api
//XMLHTTPRequest  ()
//Third party ==> axios

// console.log
// fetch
// setTimeout
// setInterval

//asunc ==> event queue ===> event loop ==> stack empty => stack
