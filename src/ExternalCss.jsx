import React, { useState } from 'react';
import styled from 'styled-components';

const ExternalCss = () => {
    const [number, setNumber] = useState(0);

    //get back react component
    const StyledP = styled.p`
        color: ${(props)=> props.number %2===0?'green': 'red'};
    `
    // } 
    // const style = {
    //     color: 'green',
    // }

    // if(number%2!==0) {
    //     style.color = 'red';
    // }
  return (
    <div>
      <StyledP number={number}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eaque?</StyledP>
      <button onClick={() => setNumber(number + 1)}>INC</button>
    </div>
  )
}

export default ExternalCss;
