function sayHI(){
    console.log("hello world from function");
}
sayHI();

function serveDrink(drink,quantity){
    console.log("here is your "+quantity+" "+drink);
}

serveDrink("Maaza",5);
//functions in js known as first class citizens.
let sayHiExpression=function(){
    console.log("Hi from function expression");
}
sayHiExpression();

//Arrow function

let sayHii=()=>{
    console.log("hello from Arrow function");
}
sayHii();

let sum=function(num1,num2){
    return num1+num2;
}

let ans=sum(5,6);
console.log(ans);