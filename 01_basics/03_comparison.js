

//console.log("2" > 1);//return true;
//console.log("02" > 1);//return true;

//console.log(null > 0);//false
//console.log(null == 0);//false
//console.log(null >= 0);//true

//why above happened bcz equality check == and comparisons > < >= <= work defferently.
//comparisons convert null to a number, treating it as 0 thats why (console.log 3) null >= 0  is true and (1) null > 0 false 


//console.log(undefined == 0);//false 
//console.log(undefined > 0);//false 
//console.log(undefined < 0);//false 


// === It is strict check 

//console.log("2" === 2);//here it is strict check that check not only equality but also check data types
//hence return false


