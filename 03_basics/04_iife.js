//Immediately Invoked Function Expressions (IIFE)

//normal jab hum log funtion likhte hain to wo to excute ho jata hai lekin ye abhi normal level pe hota hai
//lekin kabhi kabhi hum chhahte hain ki humara function sabse phele excute ho aur gloabal level pe pollute na ho kisi bhi cheez jaise dataBase connection

//normal calling
// function chai() {
//   console.log("DB CONNECTED");
// }
// chai()

//basic structure of iife callig funtion
// ()();

// iife calling

(
    function chai() {
        //named IIFE
        console.log("DB CONNECTED");
      }
)();

//(function() {
//     // function body
// })()

//, the function is defined inside the first pair of parentheses, and then immediately invoked with the second pair. This pattern is useful when you want to create a new scope, to avoid variable name clashes for example. The variables defined inside the IIFE are not accessible from the outside, they are effectively private to the IIFE.

//*************note: after writing the iife calling always write semicolon because it would give error because of of the not defining the end of the invoking */

(
    (name) => (console.log(`db connected ${name}`))
)('Alok');