// const add = x => x + x;

// function myFunc(num = 2, value = add(num)) {
//  console.log(num, value);
// }

// myFunc();
// myFunc(3);

// function mult(num){
//     return function(x){
//         return x*num;
//     }
// }

// var multByTwo=mult(2);
// var res=multByTwo(5);

// console.log(res);

let obj={
    name:"ASD",
    age:555,
    sayHello:function(batch1,batch2,batch3){
        this.batch1=batch1;
        this.batch2=batch2;
        this.batch3=batch3;
        console.log(this);
    }
}

let obj2={
    name:"MSD",
    age:544,
    // sayHello:function(){
    //     console.log(this);
    // }
}

let obj3={
    name:"SSD",
    age:453,
    // sayHello:function(){
    //     console.log(this);
    // }
}

//obj.sayHello();
//we have to call function sayHello() in obj2 and obj3 as well
// obj2.sayHello();
// obj3.sayHello();
let batches=["June2022","July2023","Dec2022"];
//obj.sayHello.call(obj2);    //use obj.sayHello and call it through obj2
obj.sayHello.call(obj3,batches[0],batches[1],batches[2]);
obj.sayHello.apply(obj3,batches);

//bind method
/**
 * bind method returns another method after
 * it creats another function and set the value of this 
 * as obj2
 */
let sayHelloBoundToObj2=obj.sayHello.bind(obj2);
sayHelloBoundToObj2();

//call apply bind 
//Tie a function into an object and call the function
//as if it belongs to that object.
//