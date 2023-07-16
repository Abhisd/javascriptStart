// script for adding popup 
let addBtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let removeBtn=document.querySelector(".remove-btn");
let addModal=true;
let removeFlag=false;


addBtn.addEventListener("click",function(){
    if(addModal){
        modal.style.display="flex";
        addModal=false;
    }
    else{
        modal.style.display="none";
        addModal=true;
    }
})

removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color="black";
        removeFlag=true;
    }
    else{
        removeBtn.style.color="red";
        removeFlag=false;
        // modal.style.display="none";
        // addModal=true;
    }
   

})


