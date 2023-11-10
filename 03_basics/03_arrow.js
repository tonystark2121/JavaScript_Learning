const user = {
  userName: "Alok",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`);
    // console.log(this);
    //         Alok, welcome to website
    // {
    //   userName: 'Alok',
    //   price: 999,
    //   welcomeMessage: [Function: welcomeMessage]
    // }
    // sam, welcome to website
    // {
    //   userName: 'sam',
    //   price: 999,
    //   welcomeMessage: [Function: welcomeMessage]
    // }
  },
};

//context means kiske bare mein baat ho rhi hai

// user.welcomeMessage()//Alok, welcome to website
// user.userName = "sam"
// user.welcomeMessage()//sam, welcome to website

//console.log(this); //{}


//in the JS the global engine for running code is Window 

//this funtion ke andar var nhi leta hai object mein leta hai
// function chai () {
//     let userName = "Alok"
//     //console.log(this);//bahot values aayi hai
//     console.log(this.userName);//undefined
// }

// chai()


// const chai = function  () {
//     let userName = "Alok"
//     console.log(this.userName);//undefined
// }

const chai = () => {
    let userName = "Alok"
    console.log(this.userName);//undefined
}
//esme mein bhi wahi values aa rhi hain jo funtion waleey mein thi


//chai()



const addTwo = (num1 , num2 ) => {
    return num1 + num2;
}//explicit return

const addTwo1 = (num1  , num2 ) => (num1 + num2);//implicit return


// agar curly braces hain to return keywork likna padega aur normal hain to nhi likhna padega
