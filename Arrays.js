let arr=[1,2,3,"Abhishek","Scaler",'z',4,5,6];
//array indexing start from 0.
console.log(arr[3]);
arr[1]='HelloWorld';
let n=arr.length;
console.log(arr[1]);

let carCollection=["Urus","Swift","Alto","Audi"];
console.log(carCollection);
//adding element to array
carCollection.push("KIA");
console.log(carCollection);
//Array.pop() removes last element.
carCollection.pop();
console.log(carCollection);
//Array.unnshift("value") it will add value at the start
carCollection.unshift("HondaCity");
console.log(carCollection);
//Array.shift() will remove first element of array
carCollection.shift();
console.log(carCollection); 