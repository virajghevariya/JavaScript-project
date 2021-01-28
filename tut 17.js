console.log("Welcome to the tut 17");

let var1=document.getElementById("heading");
var1.addEventListener('click',function(e){
   let a=e.target;
   a=e.target.className;
   a=e.target.id;
   a=e.offsetX;
   a=e.offsetY;
   a=e.screenX;
   a=e.screenY;
   console.log(a);
    console.log("you clicked.");

});

// console.log(var1);