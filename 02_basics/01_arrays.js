//array

const myArr = [0, 1, 2, 3, 4, 5];

const heroes = ["Ironman", "thor", "loki"];

const num = new Array(1, 2, 3, 4, 5);

//array followe shalow copy method means it have share by refrecnce it means we can see the changes in the actaul array
//while deep copy is just  opposite

//array methods

//unshift jo hai wo aaray ke first index pe data add krta hai

//myArr.unshift(9);
myArr.shift();
//console.log(myArr); 
//[
// 9, 0, 1, 2,
// 3, 4, 5
//   ]

//after doing shift the values inserted by unshift is remmoved 
//[ 1, 2, 3, 4, 5 ]
//again if run there is no changes in the array because there is no unshifted values that would be removed by the shift method

//console.log(myArr.includes(0));//false
//Determines whether an array includes a certain element, returning true or false as appropriate.


//console.log(myArr.indexOf(3));//2
//The value to locate in the array.
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.


const newArr = myArr.join();
// Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);//[ 1, 2, 3, 4, 5 ]
// console.log(typeof newArr);//string
// console.log(newArr);//1,2,3,4,5

//slice and splice
//slice -: Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

//splice-: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log('A ', myArr);//A  [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3);
// console.log(myn1);//[ 2, 3 ]
// console.log('B ', myArr);//B  [ 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1,3);
// console.log(myn2);//[ 2, 3, 4 ]
