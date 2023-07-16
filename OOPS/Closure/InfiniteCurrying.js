
// write an add function which can add values like this

// add(2)(3)(4)(5)......()


// add(2)(3)(); -> 5
// add(5)(2)(3)() -> 10
// add(5)(5)(5)(5)(5)() -> 25

function add(a){
    if(!a){
        return 0;
    }
    return function(b){
        if(b){
            return add(a+b);
        }
        else{
            return a;
        }
    }
}
let ans=add(2)(3)(4)(5)();
console.log(ans);

//Partial Currying OR Partial Application

function sum(a){
    return function(b,c){
        return a+b+c;
    }
}

let sumWith10=sum(10);
let ans1=sumWith10(2,5);
console.log(ans1);

let ans2=sum(10)(2,5);
console.log(ans2);