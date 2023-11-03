const marvel_heros = ['thor', "Ironman" , "spideraman"];
const dc_heros = ['superman', 'batman', 'flash'];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);//[ 'thor', 'Ironman', 'spideraman', [ 'superman', 'batman', 'flash' ] ]




const allheros = marvel_heros.concat(dc_heros);
//concat :- Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//console.log(allheros);//[ 'thor', 'Ironman', 'spideraman', 'superman', 'batman', 'flash' ]

//we can use spread operator to do the same thing

const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);//[ 'thor', 'Ironman', 'spideraman', 'superman', 'batman', 'flash' ]

const another_array = [1,2,3,[4,5,6], 6,[8,9,10,[11,12,13]]];
const real_another_array = another_array.flat(Infinity);
//flat :- Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//console.log(real_another_array);//[ 1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 11, 12, 13 ]


//for convrting any data to array we can use Array.from() method

//console.log(Array.isArray("Alok"));//false

//here we can make it array by using Array.from() method
//console.log(Array.from("Alok"));//[ 'A', 'l', 'o', 'k' ]

//console.log(Array.from({name: "Alok"}));//intersting//[]

let scroe1 = 100;
let scroe2 = 200;
let scroe3 = 300;

//console.log(Array.of(scroe1, scroe2, scroe3));//[ 100, 200, 300 ]
//Returns a new array from a set of elements.


//learn more about array methods from mdn docs like of , from , of