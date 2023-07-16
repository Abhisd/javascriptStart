// function sum(a,b,c){
//     return a+b+c;
// }

// let res=sum(5,6,9);
// console.log(res);

//all functionality is performed due to closure
// function outerFxn(a){
//     function innerFxn(b){
//         function innerMost(c){
//             return a+b+c;
//         }
//         return innerMost;
//     }
//     return innerFxn;
// }

// let innerFxn=outerFxn(5);
// let innerMostFxn=innerFxn(6);
// let res1=innerMostFxn(9);
// console.log(res1);


//with currying
// let result=outerFxn(5)(6)(9);
// console.log(result);


//Multiply 2 3 3 

// function outerMult(a){
//     function innerMult(b){
//         function innerMostMult(c){
//             return a*b*c;
//         }
//         return innerMostMult;
//     }
//     return innerMult;
// }

// let innerMultFxn=outerMult(2);
// let innerMostMultFxn=innerMultFxn(3);
// let ans=innerMostMultFxn(3);

// console.log(ans);

// //currying
// let answer=outerMult(3)(3)(2);
// console.log(answer);

//calculate sum(3)(4)
//calculate subtract(5)(2)
//divide(8)(4)

// function outerDiff(a){
//     function innerDiff(b){
//         return a-b;
//     }
//     return innerDiff;
// }

// let innerDiffFxn=outerDiff(5);
// let res=innerDiffFxn(2);
// console.log(res);

// let ans=outerDiff(5)(3);
// console.log(ans);


function outerDiv(a){
    function innerDiv(b){
        return a/b;
    }
    return innerDiv;
}

let innerDivFxn=outerDiv(8);
let res=innerDivFxn(2);
console.log(res);

//currying

let ans=outerDiv(8)(4);
console.log(ans);