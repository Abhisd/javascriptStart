
// let obj1={
//     name:"Alex"
// }
// let obj3={
//     name:"karan"
// }
// let obj2=obj1;
// obj2.name="Adam";
// obj2=obj3;
// obj3.name="Hales";
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

//****************Shallow vs Deep copy***********************

//****Shallow Copy******* */
// let obj1={
//     name:"Alex",
//     batch:"June",
//     address:{
//         city:"Nashik",
//         pin:231241
//     }
// }
// let obj2=Object.assign({},obj1); //it copies obj1 into obj2 
// obj2.name="Hales";              //changes in obj2 are not going to be                               //
// console.log(obj1);              //seen in obj1 as both obj1 and obj2 are 
// console.log(obj2);              //addressing to different objects in heap.
//another way of shallow copy

// let obj2={...obj1};

// obj2.name="Hales";
// obj2.address.city="LA";     //At the second level in heap both obj1 and obj2
// console.log(obj1);          //sharing same object address and hence change in
// console.log(obj2);          //address object will be visible in both
                            //obj1 and obj2 and its called shallow copy


//****Deep Copy******* */
let obj1={
    name:"Alex",
    batch:"June",
    address:{
        city:"Nashik",
        pin:231241
    }
}

let stringObj1=JSON.stringify(obj1);    //here we are creating a json string
//console.log(stringObj1);              //of obj1 

let obj2=JSON.parse(stringObj1);        //here we are creating obj2 by parsing
//console.log(obj2);                    //json string stringObj1

obj2.name="Hales";                      //now obj2 is separate object and
obj2.address.city="LA";                 //changes in obj2 will not be seen in
console.log(obj1);                      //obj1
console.log(obj2);