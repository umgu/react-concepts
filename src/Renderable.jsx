import React from 'react';

// JSX Object is renderable
// undefined: there is nothing to render
// null: there is nothing to render
// string, numbet: as it is
//non-JSX Objects : {}, array, function
    //{} -- Error
    //function -- warning,
    //array -- special behavior

const names = ['Umesh', 'Aravind', 'name2', 'name1', 'name3', 'name5'];
const Renderable = () => {
    //
  return <>
    <div>{names.map((name, index) => <h1 key={index}>{name}</h1>)}</div>;
  </>
}

export default Renderable;
