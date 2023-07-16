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


let order=placeOrder("tea");

///console.log(order);

// order.then(function(orderStatus){
//     console.log(orderStatus);
// })
order.then(function(orderStatus){
    console.log(orderStatus);
    return processDrink(orderStatus);
}).then(function(orderProcessed){
    console.log(orderProcessed);
    return generateBill(orderProcessed);
}).then(function(bill){
    console.log(bill);
    return payBill(bill);
}).then(function(PaymentStatus){
    console.log(PaymentStatus);
}).catch(function(error){
    console.log(error);
});

// order.catch(function(error){
//     console.log(error);
// })