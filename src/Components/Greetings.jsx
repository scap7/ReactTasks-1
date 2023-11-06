import React from "react";
export default function Greetings(){
    const [greet,setGreet]=React.useState("good morning, Sachin");
    const textHandler=()=>{
        greet==="good morning, Sachin"?setGreet("good evening, Sachin"):setGreet("good morning, Sachin");
    }
    return (
        <div>
            <h1 className="greet"onClick={textHandler}>{greet}</h1>
        </div>
    )
}