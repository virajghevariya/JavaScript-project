console.log("Welcome to the tutorial 16");

let elem=document.createElement("ul");
let text=document.createTextNode("r1234");
elem.appendChild(text);         //Append child in elem
elem.className="col";
elem.id="ulid";
elem.setAttribute("title","mytitle");

// elem.innerText="row 4";
// elem.innerHTML="<b>row 4</b>";

let ul=document.querySelector(".col");
ul.appendChild(elem);
console.log(ul);

let elem2=document.createElement("b");
elem2.id="elem2";
elem2.className="elemClass";

//replace text elem to elem 2
let tNode=document.createTextNode("Har har mahadev");
elem2.appendChild(tNode);
elem.replaceWith(elem2);

//replacing child
let replaceChild=document.getElementById("col 1");
replaceChild.replaceChild(elem,document.getElementById("fol"));        

// removing child
replaceChild.removeChild(document.getElementById("lol"));

let pr=elem2.getAttribute("id");
pr=elem2.hasAttribute("class");
pr=elem2.removeAttribute("id");         //remove attribute
console.log(elem2,pr);

// console.log(elem2);
