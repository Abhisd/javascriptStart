class Person{
    constructor(name,age){  //constructor methods gets invoked as soon as object of a class is created.
        this.name=name;     ///it will register all properties your class will have.
        this.age=age;
    }

    getName(){
        console.log(this.name);
    }
    getAge(){
        console.log(this.age);
    }
    static staticMethod(){
        console.log("this is static method");
    }
}

let p1=new Person("Abhi","25");
let p2=new Person("Ram",10987);
console.log(p1);
p1.getName();
p1.staticMethod();


