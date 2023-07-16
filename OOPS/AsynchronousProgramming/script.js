//javascript is single threaded and synchronous.
// achieving asynchronous behaviour using setTimeout()
// console.log("first hello");

// // setTimeout(function(){
// //   console.log("second hello");
// // },0);
// console.log("second hello");

// console.log("third helllo");
// function fxn(){
//     let d = 50;
//     console.log(d);
// }

// fxn();

// let a = 10;
// console.log(a);

// let b = 20;
// console.log(b);

// setTimeout(function(){
//     console.log("Hello 1st")
// },2000)


// function fxn(cb){       // higher order function
//     console.log("I am fxn");
//     cb();   // callback
// }

// function gxn(){         //callback
//     console.log("I am gxn");
// }

// fxn(gxn);


// console.log("1");

// setTimeout(function cb1(){
//     console.log("3")
// },1000);

// setTimeout(function cb2(){
//     console.log("2");
// },0)

// console.log("4");

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
 if (!obj[pet]) {
 obj[pet] = 1;
 } else {
 obj[pet]++;
 }
 return obj;
}, {});
console.log(petCounts);