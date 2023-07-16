import { useState } from "react";
export default function MyComponent(){

    let [hello,setHello]=useState();
    function handleClick(){
        setHello("Hi, Welcome!");
        console.log("Button clicked");
    }
    return (
        <>
        <button onClick={handleClick}>Click Me</button>
        <h2>{hello}</h2>
        </>
    )
}