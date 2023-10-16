//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.



//on the bases of storing and retrieving data in the memroy it (data) is categorised into two parts primitive and non-primitive


//Primitive 

//ye call by reference hote hain means jab bhi hum enhe call krte hain to ye hume copy ke form mein milte hain and jo bhi hum changes krte hain wo copy mein hi milte hain na ki acutal waley mein...

// 7 types : String , Number , Boolean , null , undefined ,Symbol ,BigInt


//Symbol data types are used to provide unique identifiers to same types or to different types depending on the need of the situation


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );
//return false

// Reference Type (Non Primitive)

// Array , Objects , Functions