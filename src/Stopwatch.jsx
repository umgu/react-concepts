import React, { useState } from "react";


const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(true);

  React.useEffect(() => {
    let intervalId;
    if(!stop) {
        intervalId = setInterval(()=> {
            setCount((count) => count + 1);
        }, 1000)
    }

    return () => {
        clearInterval(intervalId);
    }
  }, [stop]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setStop(false)}>Start</button>
      <button onClick={()=> {setStop(true)}}>Stop</button>
      <button onClick={()=> {setStop(true); setCount(0)}}>Reset</button>
    </div>
  );
};

export default Stopwatch;
