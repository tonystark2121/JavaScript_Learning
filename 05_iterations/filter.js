//foreach loop doesn't return anything

//thats why we neet to use map or filter

//filter is used to filter out the elements from the array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNums = myNums.filter((num) => {
  return num % 2 === 0;
});

// console.log(evenNums);
// [ 2, 4, 6, 8 ]