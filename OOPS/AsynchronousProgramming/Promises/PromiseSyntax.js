let myPromise=new Promise(function(resolve,reject){
    let a=5;
    let b=6;

    if(a==b){
        resolve("Success!! Promise has been kept");
    }else{
        reject("Oops, error encountered");
    }
})

myPromise.then(function(data){
    console.log(data);
})

// myPromise.catch(function(error){
//     console.log(error);
// })

// myPromise.finally(function(){
//     console.log("inside finally");
// })