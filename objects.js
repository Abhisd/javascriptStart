//in js object is like key-value pair.

//initilize empty object.

// let person={
//     name:"Abhishek",
//     age:24,
//     id:1
// };
// console.log(person);
// //dot notation
// //in dot notation whatever you write after .(dot) is treated as a string.
// console.log(person.id);

//bracked notation
//console.log(person[name]);
// console.log(person["name"]);
// let c="name";
// console.log(person[c]);

let capAmerica={
    name:"steve rogers",
    age:99999,
    friends:["groot","thanos","thor"],
    sayHi:function(){
        console.log("Hi I am Captain America");
    },
    address:{
        country:"USA",
        city:{
            state:"California",
            pincode:422205
        }
    },
    isAvanger:false
}

console.log("Age: "+capAmerica.age);
console.log(capAmerica.friends[0]);
//console.log(capAmerica.sayHi());
console.log(capAmerica.address.city.state);
