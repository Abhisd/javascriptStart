import { useState } from "react"

export default function UserGreetings(){
    let [name,setName]=useState('');

    function handleChange(e){
        setName(e.target.value);
    };
    
    return(
        <><input type="text" value={name} onChange={handleChange} /><p>Helllo {name}</p></>
    )
}