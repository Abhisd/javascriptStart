// setTimeout(() => console.log('timeout'), 0)


// Promise.resolve().then(() => console.log('promise'))

function fxn(){
    for(var i=1;i<6;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}

fxn();