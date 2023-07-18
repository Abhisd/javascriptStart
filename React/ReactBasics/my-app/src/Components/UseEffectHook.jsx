import { useEffect, useState } from "react"

export default function UseEffectHook(){
    let [count,setCount]=useState(0);
    let [text,setText]=useState("");
    let [age,setAge]=useState(13);

    let handleClick=()=>{
        setCount(count+1);
    }

    let handleChange=(e)=>{
        setText(e.target.value);
    }

    let handleAge=(e)=>{
        setAge(e.target.value);
    }

    //useEffect without dependency array
    //it will run in all mounting,updating and unmounting phase
    // useEffect(()=>{
    //     console.log("inside useEffect function");
    // });

    //useEffect with dependecy array(empty array)
    //it will run only in mounting phase
    // useEffect(()=>{
    //     console.log("inside useEffect function");
    // },[]);

    //useEffect with dependency array with values in it
    //in this case useEffect will run in mounting phase
    //and the state we pass in dependency array, for that
    //state only it will run updating phase.

    // useEffect(()=>{
    //     console.log("inside useEffect function");
    // },[count]);

    //in dependency array as per our need we can add states
    //for which we need to run the updating phase
    useEffect(()=>{
        console.log("updating when count state is updated")
    },[count]);
    useEffect(()=>{
        console.log("updating when text or age state is updated");
    },[text,age]);


    return(
        <div>
            <h1>This is my {count}</h1>
            <button onClick={handleClick}>Increment</button>
            <h2>Form</h2>
            <input type="text" value={text} onChange={handleChange}></input>
            <h2>Age</h2>
            <input type="number" value={age} onChange={handleAge}></input>
        </div>
    )
}