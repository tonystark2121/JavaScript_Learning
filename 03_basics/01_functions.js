function addTwoNumbers(a, b) {
  return a + b;
}

// after return there is no execution of code and the function is terminated if you doesn't have return any value it will return undefined

const result = addTwoNumbers(1, 2);

// console.log(result, 'result');

function loginUserMessage(user) {
  if (!user) {
    console.log("Please provide a user");
    return;
  } 
  return `${user} just logged in`;
}

//console.log(loginUserMessage()); //Please provide a user
//undefined

function calcualteCarPrice(val1 , val2 , ...num1) 
{
    //here val1 and val2 would take first two arguments from log calls and rest of the arguments would be stored in num1 as an array
    return num1;
}

//console.log(calcualteCarPrice(1,2,3,4,5,6,7,8,9,10));
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]


const userdetails  = {
    userName: "Alok",
    price : 400
}

function handleObject (userdetails) {
    console.log(`username is ${userdetails.userName} and price is ${userdetails.price}`);
}

//handleObject(userdetails);//username is Alok and price is 400