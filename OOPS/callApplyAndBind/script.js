// const add = x => x + x;

// function myFunc(num = 2, value = add(num)) {
//  console.log(num, value);
// }

// myFunc();
// myFunc(3);

function mult(num){
    return function(x){
        return x*num;
    }
}

var multByTwo=mult(2);
var res=multByTwo(5);

console.log(res);