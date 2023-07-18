import { useEffect } from "react"

export default function Examples(){

    useEffect(()=>{
        fetch('http://api.weatherapi.com/v1/current.json?key=b1d49311411a47db89e63132231607&q=Pune&aqi=no')
        .then((response)=>response.json)
        .then((data)=>{
            console.log(data);
        });
    },[]);
    return (
        <div>Data Fetcher</div>
    )
}