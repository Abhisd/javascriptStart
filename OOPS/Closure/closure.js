// function fxn(){
//     let a=10;

//     function gxn(){
//         console.log(a);
//     }
//     return gxn;
// }

// let innerFxn=fxn();
// innerFxn();


// function fxn(){
//     var a=10;

//     function gxn(){
//         console.log(a);
//         var a=20;
//     }
//     return gxn;
// }

// let innerFxn=fxn();
// innerFxn();


// function fxn(){
//     for(var i=1;i<6;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// console.log("hello");
// fxn();

//without using let print 1 2 3 4 5

//idea
/*
    as var have single referance in a function scope
    to get a scope multiple times in a for loop
    we can add the settimeout function into another function
    so that we can get a new referance every time from a function scope
*/
function fxn(){
    for(var i=1;i<6;i++){
        function gxn(i){
            setTimeout(function(){
                console.log(i);
            },i*1000);            
        }
        gxn(i);        
    }    
}
fxn();
