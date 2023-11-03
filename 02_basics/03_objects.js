//singleton when we make objects with constructor function

//object literals
//Object.create() this is contructor function

const mySym = Symbol("key1")


const Jsuser = {
  name: "Alok",
  "full name": "Alok Rawat",
  [mySym]:"myKey1", //if you want to declare a symbol so you have to decalre it in the square bracket
  age: 18,
  location: "lucknow",
  email: "alokrawat@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//console.log(Jsuser.email); //alokrawat@google.com

//console.log(Jsuser["email"]); //alokrawat@google.com

//console.log(Jsuser["full name"]);//Alok Rawat


//console.log(Jsuser[mySym]);//myKey1  interview problem

//if you want to lock the object documnet then we use freeze

//Object.freeze(Jsuser)

Jsuser.email = "alokrawat@chatgpt.com"
//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

//console.log(Jsuser);
//{
//     name: 'Alok',
//     'full name': 'Alok Rawat',
//     age: 18,
//     location: 'lucknow',
//     email: 'alokrawat@google.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'myKey1'
//   }

//values of the email doesn't changes


Jsuser.greeting = () => {
    console.log("Hello JSUsers");
}
Jsuser.greetingTwo = () => {
    console.log(`Hello JSUsers, ${this.name}`);//got undefind looks likee {Hello JSUsers, undefined}
}

//this refers to the object that the method is a part of. However, it's important to note that in arrow functions, this is lexically bound. It means that it uses this from the code that contains the arrow function. So, if greetingTwo is called, this.name might not refer to any name property in the Jsuser object, depending on where and how greetingTwo is called.

// If you want this to refer to the Jsuser object, you should use a regular function instead of an arrow function.

//string interpolation

Jsuser.greetingTwo = function() {
    console.log(`Hello JSUsers, ${this.name}`);//got undefind looks likee {Hello JSUsers, undefined}
}

//console.log(Jsuser.greeting);//[Function (anonymous)]

//console.log(Jsuser.greeting());//Hello JSUsers
//console.log(Jsuser.greetingTwo());//Hello JSUsers, Alok
//Hello JSUsers

