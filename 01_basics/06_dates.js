let myDate = new Date();
//console.log(myDate);//2023-11-02T01:17:40.106Z
//console.log(myDate.toString());//Thu Nov 02 2023 06:48:12 GMT+0530 (India Standard Time)
//console.log(myDate.toISOString());//2023-11-02T01:23:45.922Z
// console.log(myDate.toDateString());//Thu Nov 02 2023
// console.log(myDate.toLocaleDateString());//2/11/2023
// console.log(myDate.valueOf());//1698888257814
// console.log(myDate.toTimeString());//06:54:17 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleTimeString());//6:54:17 am
// console.log(myDate.toLocaleString());//2/11/2023, 6:54:17 am
// console.log(myDate.toJSON());//2023-11-02T01:24:17.814Z

//console.log(typeof myDate);//object

let mycreatedDate = new Date(2023, 0, 23); //month 0 se start hota hai
//console.log(mycreatedDate.toString());//Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

/*********************************** TIME STAMP **********************************************/

//for getting the current milisecond we use Date.now()

const myTime = Date.now(); //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC)
//console.log(myTime);//1698888902977
//for comparison we proceed with
//console.log(mycreatedDate.getTime());//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC
//return 1674412200000

//for customization we should use toLocaleString methods for example

const newDate = new Date();
const customDate = newDate.toLocaleString("default", {
  weekday: "long",
  year: "2-digit",

  month: "2-digit",
  day: "numeric",
});

//console.log(customDate);//Thursday, 2/11/23
