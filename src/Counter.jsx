import { Fragment, useState } from 'react';

function Btn(props) {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}

// Number==0,1,2
// string
export default function Counter(props) {
    const { onChange } = props;
    const [count, setCount] = useState(0);
    // const [disableBtn, setDisableBtn] = useState(false);

    const incClickHandler = () => {
        setCount(count + 1); // async
        onChange(count + 1);
    }
    const decClickHandler = () => {
        setCount(count - 1);
        onChange(count - 1);
    }

    return (
        <div style={{ display: 'flex' }}>
            <button onClick={decClickHandler}>Dec</button>
            <h3>{count}</h3>
            <button onClick={incClickHandler}>Inc</button>
        </div>
    )
}


// function () {
//     return [1,2];
// }