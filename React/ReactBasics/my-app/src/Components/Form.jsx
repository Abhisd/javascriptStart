import { useState } from "react";
export default function Form(){
    let [firstName,setFirstName]=useState("");
    let [lastName,setLastName]=useState(""); 

    let handleChangeFirstName=(e)=>{
        setFirstName(e.target.value);
    }

    let handleChangeLastName=(e)=>{
        setLastName(e.target.value);
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(firstName,lastName);
    }
    return(
        <div>
        <h1>Hello</h1>
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input type="text" onChange={handleChangeFirstName} value={firstName}></input>
            
            <input type="text" onChange={handleChangeLastName} value={lastName}></input>
            <button type="submit">Submit</button>

            <p onSubmit={handleSubmit}>Hello {firstName+" "+lastName}, your form is submitted successfully!</p>
        </form>
        </div>
    )
}