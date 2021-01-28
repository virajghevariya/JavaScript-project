console.log("Welcome to the tut 20 of JavaScript");

// Add key -value pair
// localStorage.setItem('name','VD');
// localStorage.setItem('name2','viraj');
// localStorage.setItem('name3','Viru');

// Remove Item
localStorage.removeItem('name2','viraj');

// Clear all the key-value pair.
// localStorage.clear();

// Get Item
let l_storage=localStorage.getItem('name3');
console.log(l_storage);

let fruit=['apple','mango','safarjan'];
localStorage.setItem('array',JSON.stringify (fruit));
let a=JSON.parse(localStorage.getItem('array'));
console.log(a);

// console.log(l_storage);

// Session Storage
// sessionStorage.setItem('sessionname','sVD');
// sessionStorage.setItem('sessionname2','sviraj');
// sessionStorage.setItem('sessionname3','sViru');
  
// let s_storage=sessionStorage.getItem('sessionname3');
// console.log(s_storage);