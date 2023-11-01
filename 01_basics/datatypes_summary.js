//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.



//on the bases of storing and retrieving data in the memroy it (data) is categorised into two parts primitive and non-primitive


//Primitive (call by values)

//ye call by reference hote hain means jab bhi hum enhe call krte hain to ye hume copy ke form mein milte hain and jo bhi hum changes krte hain wo copy mein hi milte hain na ki acutal waley mein...

// 7 types : String , Number , Boolean , null , undefined ,Symbol ,BigInt


// datatypes of the data is given below:
// undefined = "undefined"
// number = "number"
// null = "object" why ? because it have unique propert and that's why it should be null
//Symbol = "Symbol"
//bigint = "bigint"

//Symbol data types are used to provide unique identifiers to same types or to different types depending on the need of the situation


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId );
//return false

// console.log(id , 'id');//Symbol(123)
// console.log(anotherId , 'another id');//Symbol(123)

//BigInt data types is used for large number storage to make this number bigInt we should simply put "n" in the last of the number
const bigNumber = 789946235956216163n;

//console.log(typeof(bigNumber));//bigint
 




// Reference Type (Non Primitive or call by refrence)

// Array , Objects , Functions

//all the reference type data ka data types jo hai wo function hi hota hai let check out

const array = ['Apple' , "fruits" , "rose"];
//console.log(typeof(array));//object

const object = {
    name: 'Alok',
    age: 22
}
//console.log(typeof(object));//object

const printMyNameObject = () => {
    return object;
}

//console.log(typeof(printMyNameObject()));//object




//***************************************Memory types in JavaScript ******************************************************** */

//Stack and Heap
// Stack memory is used in the primitive data types here we used stack because it would generate new copy of the same data not actual
//Heap memory is used in the non-primitive here we used heap memory because we have to maintain the value of the data actual values not copy

//example for stack

let userName = "Alok Rawat"

let guestName = userName;
guestName = "Tony Stark";

// console.log(userName );//Alok Rawat
// console.log(guestName );//Tony Stark

//example for heap

let userOne = {
    name: "Alok ",
    email: "alok@google.com"
}

let userTwo = userOne;
userTwo.email= "tony@google.com";

//console.log(userOne?.email);//tony@google.com
//console.log(userTwo?.email);//tony@google.com
