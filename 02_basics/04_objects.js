//const tinderUser = new Object();
const tinderUser = {};
//console.log(tinderUser);//{} this is singleton object
//console.log(tinderUser);//{} this is normal object

tinderUser.id = "1234abc"
tinderUser.name = "tony"
tinderUser.isLoggedin = false


//console.log(tinderUser);//{ id: '1234abc', name: 'tony', isLoggedin: false }



const requalUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "alka",
            lastName: "stark"
        }
    }
}

//console.log(requalUser.fullName.userFullName.firstName);//alka


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

const obj3 = Object.assign({},obj1 , obj2);
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//or normally we use spread operators to copy the values

const obj4 = {...obj1 , ...obj2};
//console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//console.log(tinderUser);//{ id: '1234abc', name: 'tony', isLoggedin: false }

//console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedin' ]

//console.log(Object.values(tinderUser));//[ '1234abc', 'tony', false ]

//console.log(Object.entries(tinderUser));
//[ [ 'id', '1234abc' ], [ 'name', 'tony' ], [ 'isLoggedin', false ] ]

