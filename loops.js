console.log('Welcome to the LOOPS');

//  for(var i=0; i<10; i++){
//      console.log(i);
//  }

//  let j=0;
//  while(j<5){
//      console.log(j);
//      j++;
//  }

// let k=0;
// do{
//     if(k==5){
//         k+=1;
//         continue;
//     }
//     console.log(k+1);
//     k++;
// }while(k<10)
// console.log("VERY GOOD");

// let arr = [21,22,23,24,25];
// // arr.forEach(function(i){
// //     console.log(i);
// // });
//             // OR 
// for(let j=0; j<arr.length; j++){
//     console.log(arr[j]);


let list={
    name:"montu",
    age:"20",
    sem:"7th CE"
}

for (let key in list){
    console.log(`${key} of candidate is ${list[key]}`);
}