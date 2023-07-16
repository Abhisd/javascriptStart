class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sayHello(){
        console.log("Hello from "+this.name);
    }
}

// let p1=new Person("abhi",23);
// p1.sayHello();

//Inheritance
class Student extends Person{
    constructor(name,age,batch,score){
        super(name,age);   //super inherits properties of parent class.
        this.batch=batch;
        this.score=score;
        
    }
}
// let s1=new Student("abhi",25,"june22",90);
// s1.sayHello();

class Teacher extends Student{
    constructor(name,age,batch,score,batchStrength){
        super(name,age,score,batch);
        this.batchStrength=batchStrength;
    }

    getBatchSize(){
        console.log("Total students "+this.batchStrength);
    }
}

let t=new Teacher("Manikya",25,"june22",101,100);
console.log(t);
t.getBatchSize();
t.sayHello();

