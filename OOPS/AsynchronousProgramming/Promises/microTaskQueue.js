
// console.log("before");

// setTimeout(function cbsetTimeout(){
//     console.log("timeout");
// },0);

// Promise.resolve().then(function cbP1(){
//     console.log("Inside Promise resolved");
// });

// Promise.resolve().then(function cbP2(){
//     console.log("another Promise");
// });
// console.log("after");

 function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(reject('error'),1000);
  });
}

async function logData(){
    try{
        const result=await fetchData();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

logData();

//fetchData().then((data)=> console.log(data));
console.log('end');

