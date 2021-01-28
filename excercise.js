let busPass=false;
let rupees=prompt("Enter amount:");

if(busPass || rupees>5){
    console.log("you can ride");
}
else if(busPass || rupees==5){
    console.log("you can go for HALF DRIVE");
}
else{
    console.log("you can't drive");
} 


// if(busPass && rupees>5){
//     console.log("you can ride");
// }
// else if(busPass && rupees==5){
//     console.log("you can go for HALF DRIVE");
// }
// else{
//     console.log("you can't drive");
// } 