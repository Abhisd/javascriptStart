//console.log(this);    empty object{}

//this will show global object.
// function fn(){
//     console.log(this);
// }
// fn();

//global object
// function fxn(){
//     function gxn(){
//         console.log(this);
//     }
//     gxn();
// }

// fxn();

// let obj={
//     name:"abhi",
//     age:25,
//     sayHello:function(){
//         console.log(this);
//     }
// }
// //here we are calling the function throught the obj
// //so it will print the obj itself.
// obj.sayHello();

class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
        console.log("Animal sound");
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);

    }
    makeSound(){
        console.log("Bhoooo");
    }
}

var animal=new Animal("generic");
animal.makeSound();

