import "./App.css";
import Counter from "./Counter";
import { createElement, useState } from "react";
import Calculator from "./Calculator";
import TodoList from "./TodoList";
import Form from "./Form";
import Renderable from "./Renderable";
import ExternalCss from "./ExternalCss";
import Effects from "./Effects";
import Cart from "./cart";
import Stopwatch from "./Stopwatch";
import Navbar from "./routing-example/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routing-example/Home";
import Blogs from "./routing-example/Blogs";
import Blog from "./routing-example/Blog";
import Contact from "./routing-example/Contact";

export default function App() {
  // const [change, setChange] = useState(true);
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
        {/* <Route path="blogs/:blogId" element={<Blog />} /> */}
        {/* <Route path="/blogs/?page" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>
    // {/* <div> */}
    //   {/* <Navbar /> */}
    //   {/* <Counter init={10} step={2} final={20}/> */}
    //   {/* <Calculator /> */}
    //   {/* <TodoList /> */}
    //   {/* <Form /> */}
    //   {/* <Renderable /> */}
    //   {/* <ExternalCss /> */}
    //   {/* <Effects /> */}
    //   {/* <Cart /> */}
    //   {/* <button onClick={() => setChange(!change)}>Change</button> */}
    //   {/* <Stopwatch /> */}
    // {/* </div> */}
  );
}

//useState  ==> to manage state
//useContext ==> to procide global store
//useReducer ==> to keep all operation together

//Redux ==> State management tool

// /coutry/state/city

// /country
