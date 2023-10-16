//null is the object 
//undefined is the undefined value


let score = undefined;

//console.log(typeof score); //undefined
//console.log(typeof(score)); //undefined

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NAN(not a number)

// "33"  => 33
// "33abc" => NaN
// true => 1 ; false => 0

let loggedIn = 'Alok Rawat';
//if we convert the emplty string to a boolen then string false hoti hai and if we put some value in the string then string true hoti hai 
let booleanOIsLoggedIn = Boolean(loggedIn);

//console.log(booleanOIsLoggedIn); // true


//Notes conversions of the boolean
// 1 => true ; 0 => false
// emplty string => false 
// "something" => true

let someNumber = 33

let stringNumber = String(someNumber);
//console.log(stringNumber);//gives 33 but we can say it is number or string so we have to check its type
//console.log(typeof(stringNumber));
//gives string 




//*************************OPERATION ************************

let value = 3;
let negValue = -value;
//console.log(negValue);
// return negative value -3

let str1 = "Hello"
let str2 = " Alok"

let str3 = str1 + str2
//console.log(str3);

//console.log("1" + 2);//return 12
//console.log(1 + '2');//return 12
//console.log("1" + 2 + 2);//return 122
//console.log(1 + 2 + "2"); //return 32 why ?
//agar string phele hai to baad ke sabhi string treat kiye jayenge or else phele calculation of jayega then string string add krke show hoga

//console.log(+true);//return 1 bcz number mein convert kr rhe hain boolean
//console.log(+"");//return 0 bcz number


let xpost = 3;
const ypost = x++;
// x is 4; y is 3

let x2post = 3n;
const y2post = x2++;
// x2 is 4n; y2 is 3n


let xpre = 3;
const ypre = ++x;
// x is 4; y is 4

let x2pre = 3n;
const y2pre = ++x2;
// x2 is 4n; y2 is 4n
