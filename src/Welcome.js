import React, { Component } from "react";

function ButtonCounter() {
    const initialState = 0;
    const [count, setCount] = React.useState(initialState);
    return (
     <div>
        Count: {count}
        <button onClick={() => setCount(count => count + 1)}>+</button>
        <button onClick={() => setCount(count => count - 1)}>-</button>
      </div>
    );
  }

 export default ButtonCounter;