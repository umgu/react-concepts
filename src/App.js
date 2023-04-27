import './App.css';
import Counter from './Counter';
import { createElement, useState } from 'react';
import Calculator from './Calculator';
import TodoList from './TodoList';
import Form from './Form';
import Renderable from './Renderable';
import ExternalCss from './ExternalCss';
import Effects from './Effects';
import Cart from './cart';
import Stopwatch from './Stopwatch';

export default function App() {
  // const [change, setChange] = useState(true);
  return (
    <div>
      {/* <Counter init={10} step={2} final={20}/> */}
      {/* <Calculator /> */}
      {/* <TodoList /> */}
      {/* <Form /> */}
      {/* <Renderable /> */}
      {/* <ExternalCss /> */}
      {/* <Effects /> */}
      <Cart />
      {/* <button onClick={() => setChange(!change)}>Change</button> */}
      {/* <Stopwatch /> */}
    </div>
  );
}

//useState  ==> to manage state
//useContext ==> to procide global store
//useReducer ==> to keep all operation together

//Redux ==> State management tool