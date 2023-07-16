let obj={
    name:"Alex",
    age:25
}
//console.log(obj);

// function Car(name,color){
//     this.name=name;
//     this.color=color;

//     // this.sayHello= function() {
//     //     console.log("You are in "+this.name);
//     // };
//     // this.brakes=function(){
//     //     console.log("brakes pressed in "+this.name);
//     // }
    
// }
// Car.prototype.sayHello=function(){
//     console.log("Yuo are in "+this.name);
// }
// Car.prototype.brakes=function(){
//     console.log("brakes pressed in "+this.name);
// }
// let car1=new Car("BMW","Black");
// console.log(car1);  
// let car2=new Car("Audi","Red");
// console.log(car2);
// let car3=new Car("Alto","White");
// console.log(car3); 

function Laptop(name,color,RAM,screenSize){
        this.name=name;
        this.color=color;
        this.RAM=RAM;
        this.screenSize=screenSize;

        // this.showProperites=function(){
        //     console.log(this);
        // }
}

Laptop.prototype.showProperites=function(){
    console.log(this);
}
let l1=new Laptop("Dell","Black","8GB","12 inch");
l1.showProperites();
//let flag=l1.hasOwnProperty("name");

let l2=new Laptop("HP","Black","6GB","12 inch");
l2.showProperites();

let l3=new Laptop("Lenovo","Grey","4GB","10 inch");
l3.showProperites();

let l4=new Laptop("Apple","Silver","12GB","15 inch");
l4.showProperites();

