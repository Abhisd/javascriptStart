function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink=="coffee"){
            resolve("Order for coffee is placed");
        }
        else{
            reject("Order not placed");
        }
    });
}


function processDrink(orderStatus){
    return new Promise(function(resolve){
        resolve(orderStatus+" and served");
    })
}

function generateBill(orderProcessed){
    return new Promise(function(resolve){
        resolve(orderProcessed+" and bill is 100 rs");
    })
}

function payBill(bill){
    return new Promise(function(resolve){
        resolve(bill+ " Payment done!");
    })
}

// async function serveOrder(){
//   let orderStatus=await placeOrder("coffee");
//  // console.log(orderStatus);

//   let processDrnk=await processDrink(orderStatus);
//  // console.log(processDrnk);

//   let bill=await generateBill(processDrnk);
//  // console.log(bill);

//   let payment=await payBill(bill);
//   console.log(payment);
  
// }

//serveOrder();


//using try catch block

async function serveOrder(){
    try{
        let orderStatus=await placeOrder("tea");
        // console.log(orderStatus);
       
         let processDrnk=await processDrink(orderStatus);
        // console.log(processDrnk);
       
         let bill=await generateBill(processDrnk);
        // console.log(bill);
       
         let payment=await payBill(bill);
         console.log(payment);
    }catch(error){
        console.log(error);
    }

}
serveOrder();