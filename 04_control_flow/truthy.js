// const userEmail = "tonystart.ai"


// if (userEmail) {
//     console.log("email is valid")
// } else {
//     console.log("email is not valid")
// }

//here we discussed about truthy and falsy values

//falsy values are: 0, false, undefined, null, NaN, "" , -0 , BigInt 0n, 

//truthy values are: all values except falsy values

// "0" is a truthy value

// 'false' is a truthy value

// " " , []  , { } , function(){} are all truthy values


const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty")
}


//false == 0 it returns true bcuz it is a loose comparison
// same happens with empty string and 0
// 0 == "" returns true
// 0 == [] returns true
// 0 == {} returns false
// "" == [] returns false
// "" == {} returns false
// [] == {} returns false


//Nullish coalescing operator (??)
// here we only check for null and undefined

let val1;

// val1 = 5 ?? 10; return 5
// val1 = null ?? 10; return 10
// val1 = undefined ?? 10; return 10

