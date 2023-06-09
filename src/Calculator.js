import React, { useState } from 'react';
import Counter from './Counter';

const Calculator = () => {
    const [operand1, setOperand1] = useState(0);
    const [operand2, setOperand2] = useState(0);

    const setOperand = (val, opNo) => {
        if(opNo === 1) {
            setOperand1(val);
        }
        else {
            setOperand2(val);
        }
    };

    return (
        <div>
            <h1>Result: {operand1 + operand2}</h1>
            <Counter onChange={(val)=> setOperand(val, 1)}/>
            <Counter onChange={(val)=> setOperand(val, 2)}/>
            {/* <div style={{display: 'flex'}}>
                <button onClick={() => setOperand2(operand2 - 1)}>Dec</button>
                <h3>{operand2}</h3>
                <button onClick={() => setOperand2(operand2 + 1)}>Inc</button>
            </div> */}
        </div>
    )
}

export default Calculator;
