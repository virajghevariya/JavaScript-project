console.log("Welcome to the DOM tut 14");

let element= document.getElementById('first');
// element=document.getElementsByClassName('child');
// element=document.getElementsByTagName('div');
element.innerText="Welcome to the india";
element.innerHTML="<b>Welcome to the Page</b>";
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// element.style.color="red";

// let querySelector=document.querySelector('.child');
// querySelector=document.querySelector('#division');
querySelector=document.querySelector('a');
querySelector.style.color="green";
console.log(querySelector);

//2). multiple selector
 let multipleSelector=document.getElementsByClassName("container");
 multipleSelector=document.getElementsByClassName("child");
 multipleSelector=document.getElementsByTagName("div");
 console.log(multipleSelector);

for(let i = 0 ; i<multipleSelector.length ; i++){
    let y=multipleSelector[i];
    console.log(y);
    y.style.color="Blue";


}
// Array.from(multipleSelector).forEach(element => {
//      console.log(element);
//      element.style.color="Blue";
//     });
