const arr = [1 , 2 , 3 ,4 ,5 , 6];

//syntax of the forof loop here object is the array not a js object
// for (const iterator of object) {
    
// }
//iterator is the variable that will store the value of the array


// for (const num of arr) {
//     console.log(num);
// }


// const str = "tonystark.ai";


// for (const discussed of str) {
//     console.log(discussed);
    
// }


//MAPS


const map = new Map();

map.set("name" , "tony");
map.set("age" , 45);
map.set("address" , "new york");
map.set("isAvenger" , true);
//map only sotres unique keys

//console.log(map); //it will return a map object
// Map(4) {
//     'name' => 'tony',
//     'age' => 45,
//     'address' => 'new york',
//     'isAvenger' => true
//   }




// for (const keys of map) {
//     console.log(keys);
// }

// [ 'name', 'tony' ]
// [ 'age', 45 ]
// [ 'address', 'new york' ]
// [ 'isAvenger', true ]


// for (const [key , value] of map) {
//     console.log(key , "-: " , value);
// }

// name -:  tony
// age -:  45
// address -:  new york
// isAvenger -:  true


// const obj = {
//     "name" : "tony",
//     "age" : 45,
//     "address" : "new york",
//     "isAvenger" : true
// }

// for (const [key, value] of obj) {
//     console.log(key , "-: " , value);
// }

//TypeError: obj is not iterable


// const obj = {
//     name : "tony",
//     age : 45,
//     address : "new york",
//     isAvenger : true
// }

// for (const [key, value] of obj) {
//     console.log(key , "-: " , value);
// }

//TypeError: obj is not iterable