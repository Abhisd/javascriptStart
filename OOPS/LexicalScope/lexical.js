// function fxn(){
//     console.log(a);

//     function gxn(){
//         let a=10;
//     }
//     gxn();
// }

// fxn();


// function fxn(){
//     let a=10;
//     function gxn(){
//         function gxn2(){
           
//             console.log(a);
//         }
//         gxn2();
//     }
//     gxn();
// }

// fxn();

// function outer(){
//     let a=20;
//     function inner(){
//         console.log(a);
//     }
//     a=20;
//     inner();
// }

// var fun=outer();
// fun();

function add(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}

var res=add(2)(3,4);
console.log(res);

function mult(a){
    return function(x){
        return a*x;
    }
}

var mult2=mult(2);
var mult3=mult(3);
var res=mult2(mult3(4));
console.log(res);