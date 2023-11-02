const name = "Alok";
const repoCount = 90;

//console.log(`Hi, I am ${name} and my repo count ${repoCount} along with I am Android developer`);
//Hi, I am Alok and my repo count 90 along with I am Android developer
//here in the ${} symbol we can use come methods as toupper case and lower and etc

//lets jump to the interesting topic details of the string

const gameName = new String("Alok Rawat");
//return normal string but it is also behave like an object let's dive in...
//if we go to the console.log in browser section we can see the following section..
// >>String {'Alok Rawat'}
//0: "A"
//1: "l"
//2: "o"
//3: "k"
//4: " "
//5: "R"
//6: "a"
//7: "w"
//8: "a"
//9: "t"
//length: 10

//console.log(gameName.__proto__);//{}

//console.log(gameName.toUpperCase());//ALOK RAWAT , here the actual value of the gameName is not change because it primitive data types
//console.log(gameName);//[String: 'Alok Rawat']

const newString = gameName.substring(0, 4);
//console.log(newString);//Alok , here 4th character is not included....
//console.log(newString.length);//4


const anotherString = gameName.slice(-8, 5);//here three character ok is 2 and another which is whitespace also in the slice we can give negative values in the end and start 
//console.log(anotherString);//ok
//console.log(anotherString.length);//3


//trim method is used to Removes the leading and trailing white space and line terminator characters from a string.
const userThere = "         Stark in company          "
//console.log(userThere);//         Stark in company          
//console.log(userThere.trim());//Stark in company

const url = "alokrawat2121@gamil.com%20tony"//browser convert the space into url encoding
//console.log(url.replace('%20' , '-'));//alokrawat2121@gamil.com-tony
//console.log(url.includes('alok'));//true


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
//console.log(words);//used for making the string look like array
//[
//     'The',   'quick',
//     'brown', 'fox',
//     'jumps', 'over',
//     'the',   'lazy',
//     'dog.'
//   ]

