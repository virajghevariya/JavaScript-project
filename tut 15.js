console.log("Welcome to the tut 15");

let qselector=document.querySelector(".container");
// console.log(qselector.childNodes[0]);
let a=console.log(qselector.children);
// console.log(qselector.childNodes[0].nodeType);
console.log(qselector.children[0].nextElementSibling);
console.log(qselector.children[1].firstChild);
console.log(qselector.children[5].firstChild);

Array.from(a).forEach(element => {
    console.log(a);
});