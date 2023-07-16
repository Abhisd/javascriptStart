let fs= require("fs");

//reading files serially using asynchronous

console.log("before");

//callback hell
fs.readFile("f1.txt",function cb1(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log("data from file1 "+data);

        fs.readFile("f2.txt",function cb2(error,data){
            if(error){
                console.log(error);
            }
            else{
                console.log("data from file2 "+data);
            }
        })
    }
})
