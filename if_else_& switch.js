console.log("welcome to the if else & switches");
// const age=prompt("Enter your age"); <=#taking input from user.
const age=20;
// const variable=34;
let boolvar=false;
let power=prompt("off");

// if(age>18){
//     // console.log("you are eligible for driving.");
//     alert("you are eligible for driving.");
// }
// else if(age==18) {
//     console.log("Still you are not eligible for driving.");
//     // alert("Still you are not eligible for driving.");
// }
// else{
//     console.log("You are not eligible for driving.");
//     // alert("You are not eligible for driving.");
// }

// if(typeof variable !== 'undefined'){
//     console.log("variable is define");
// }
// else{
//     console.log("variable is not define");
// }

// if(boolvar && age>18){
//     console.log("boolvar is true");
// }
// else{
//     console.log("boolvar is false");

// }


// console.log(age>18 ? "can drive" : "can't drive" );

switch(power) {
    case "on" :
        console.log("bulb on");
        break;

    case "off" :
        console.log("bulb off");
        break;

} 