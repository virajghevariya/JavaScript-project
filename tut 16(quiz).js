//quick quiz

/* create a heading element with text as 
"viraj bhai ka darbar" and create an a tag outside it
with href = "https://www.codewithharry.com"*/

//Create a heading and add some text
let quickQuiz=document.createElement("h4");
quickQuiz.id="qq";
quickQuiz.className="qq1";

let tNode=document.createTextNode("Viraj bhai ka DARBAR");      //add text
quickQuiz.appendChild(tNode);

let qSelector=document.querySelector("div.child");
qSelector.appendChild(quickQuiz);
console.log(qSelector);

//create a link and add some text
let newtag=document.createElement("a");
newtag.href="https://www.codewithharry.com";
let inText=document.createTextNode("Go to harry");
newtag.appendChild(inText);
console.log(newtag);


let outlink = document.querySelector("a.link1");
outlink.appendChild(newtag);
console.log(outlink);



// console.log(quickQuiz);
