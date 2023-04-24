import React, { useState, useEffect } from 'react';

const data = ['Gujarat', 'Goa', 'Mumbai', 'Banglore', 'Punjab'];
let count = 0;
function getCities(query) {
    console.log("---getCities---", ++count);
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(data.filter((d) => d.includes(query)));
        }, 3000)
    });
}

// getCities('ang').then(res => res);

//React assumes that component is pure (useEffect())
const Effects = () => {
    console.log("---Render---");
    const [query, setQuery] = useState('');
    const [myData, setMyData]= useState([]);
    const [count, setCount] = useState(0);

    useEffect(()=> {
        let shuoldRender = true;

        getCities(query).then((res) => {
            if(shuoldRender) {
                setMyData(res);
            }
         });

        return function cleanUp() {
            console.log("Cancelling response");
            shuoldRender = false;
        }
    }, [query])

    useEffect(() => {
        const fun = () => {
            console.log("---Clicked");
        }
        document.addEventListener("click", fun);

        return () => {
            document.removeEventListener("click", fun);
        }
    }, []);

    return (
        <div>
            <input onChange={(e) => setQuery(e.target.value)} />
            <button onClick={()=> setCount(count + 1)}>Inc</button>
            {[myData].map(city => <h1>{city}</h1>)}
        </div>
    )
}

export default Effects;


//function()
let globalVar = 0;
//function sum(a,b) {
    // globalVar=10;
    // a++; //not an effect
    // console.log("kjdghfsdfk");
 //    return a+b;
// }
// sum(3,4);

// function printSomething() {

// }

// function getHash(password) {
//     console.log(password); //
//     return Hash;
// }

// effects === computatinal effect === side effects

// A fn which has side effect ==> impure fn
// A fn has no effect ==> pure function

// initial Render
// change?
// rerender
// change?
// rerender

//initial render
//effects
//change?
//rerender
//effects
// change?

// REact asks
// 1) what to do??
// 2) when to do it?

// no argumanet ==> react assumes apply effect every TimeRanges, on every rerender
//[] ==> apply effects only once at initial render
//[data] ==> apply effect when ever dependencies value change

//Multiple in-flight request

// 0 1 2 3
// Reset stop Start
// 0      12    13,14