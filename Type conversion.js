// Type conversion and type coercion
console.log("welcome to Type Conversion");
let a;
a=String(20);
// console.log(a,(typeof a));

// let string="viraj";
// console.log(string , (typeof string));

let booleanvar = String(true);
// console.log(booleanvar , (typeof booleanvar));

let date =String(new Date());
// console.log(date , (typeof date));

let arr =String([1,2,3]);
// console.log(arr.length , (typeof arr));

let ab=Number('vd');
console.log(ab.toString());

let n=Number([1,2,3,4,5]);
let n3=String([1,2,3,4,5]);
let n2=Number('124');

// console.log(n , (typeof n));
// console.log(n.toString());
console.log(n3.length , (typeof n3));

let n1=parseFloat('21');
console.log(n1.toFixed(20) , (typeof n1));

// type coercion

let str1='12';
let str2=21;
console.log(str1+str2);