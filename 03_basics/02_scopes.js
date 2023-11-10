let a = 300
if (true) {
    let a = 50
    const b = 100
   // console.log(a)
    
}
//console.log(a);


function one () {
    const userName = "Alok Rawat"

    function two () {
        const website = "youtube"
        console.log(userName);
    }

  //  console.log(website);//here we can't access the website becuase website scope is limited to curly braces only

    two();
}


one()



/*************interesting************* */



function addOne (num) {
    return num+1
}

console.log(addOne(5));


const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(5));


//variables and const ka javaScript mein hoistng context hota hai jisme jahan wo declare kiye jate hain wahin access hi kr skte hain ya uske nichey jabki funtion ka top level hota hai 