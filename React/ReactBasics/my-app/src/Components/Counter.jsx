import { useState } from "react";
export function Counter(){

    let [count,setCount]=useState(0);

    function handleIncrement(){
       setCount(prevCount=>prevCount+1);
    }

    // function handleDecrement(){
    //     setCount(count-1);
    //     if(count==0){
    //         alert("Stop decrementing");
    //         return;
    //     }
    // }
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        {/* <button onClick={handleDecrement}>Decrement</button> */}
        </>

    )
}