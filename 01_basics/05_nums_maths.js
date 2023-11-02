const scrore = 400;
//console.log(scrore);//400

const balance = new Number(100)
//console.log(balance);//[Number: 100]


//console.log(balance.toString());//3
//console.log(balance.toFixed(2));//100.00


const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(3));//124
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));//10,00,000
//Converts a number to a string by using the current or specified locale.

//************************MATHS****************************** */

// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5 choose always higher value
// console.log(Math.floor(4.9));//4 choose always lower value

//mostly it comes as decimal values along with 0.46562
// console.log(Math.random());//0.6736109472580918
// console.log(Math.random());//0.5911659987511932

//hece we should multiply Math.random with 10 or number of digits we needed...

//console.log(Math.random() * 100);//24.786496991035058
//console.log(Math.floor(Math.random() * 10) + 1);//always give values in the 1 digits garranties return 4 


const mn  = 10
const mx = 20

//if we want to have number in the specific range in our project then we proceed like that

//console.log(Math.floor(Math.random() * (mx - mn + 1) ) + mn);
//it always gives us values betweeen mn and mx

