import React from "react";
export default function Counter(){
    const [count,setCount]=React.useState(5);
    const incCount=()=>{
        count<10?setCount(prev=>prev+1):alert("value cannot be more than 10");
    }
    const decCount=()=>{
        count>0?setCount(prev=>prev-1):alert("negetive values not allowed");
    }
   
    return (
        <div className="counter-container">
            <button onClick={incCount}>plus</button>
            <h1>{count}</h1>
            <button onClick={decCount}>minus</button>
        </div>
    )
}