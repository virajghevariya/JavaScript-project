console.log("Welcome to the tut 18");

let event1=document.getElementById("btn");
event1.addEventListener('click',func1);
event1.addEventListener('dblclick',func2);
event1.addEventListener('mousedown',func3);

function func1(){
    console.log("One click.");
}

function func2(){
    console.log("Double click.");
}

function func3(){
    console.log("mouse down.");
}

let var2=document.querySelector(".container");
var2.addEventListener("mouseenter",function(e){
    console.log("mouse enter");
});

var2.addEventListener("mouseleave",function(e){
    console.log("mouse leave");

    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX} , ${e.offsetY} , ${e.offsetX + e.offsetY})`;

});
console.log(var2);
// console.log(event1);