console.log("Welcome to exercise 1");

let fetchLinks=document.links;
console.log(fetchLinks);

let str="python";
let href;
Array.from(fetchLinks).forEach(function(element){
    href=element.href;
    if(href.includes(str)){
        console.log(href);
    }
}
)
