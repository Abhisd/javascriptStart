// let arr=[1,2,3,4,5];
// // let squareArr=arr.map(function(ele){
// //     return ele*ele;
// // })
// // console.log(squareArr);



// function myMap(arr,operation){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(operation(arr[i]));
//     }
//     return newArr;
// }
// function square(ele){
//     return ele*ele;
// }
// function cube(ele){
//     return ele*ele*ele;
// }
// let squareArray=myMap(arr,square);
// let cubeArray=myMap(arr,cube);
// console.log(squareArray);
// console.log(cubeArray);

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
 myPromise().then(res => console.log(res));
 console.log('second');
}

async function secondFunction() {
 console.log(await myPromise());
 console.log('second');
}

firstFunction();
secondFunction();