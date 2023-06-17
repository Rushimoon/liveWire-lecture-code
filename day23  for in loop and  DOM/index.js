

// create a obj for car which contains all the detials of car such as 
//car name , model no , manifacturing company , colour ,no of seats , engine cc etc
// consider default  colour as red and default capacity as 5 
// change the colour and capacity to yellow and 10;
// ex

// let obj={}
// obj["name"]="hemant"
// obj["age"]=25
// obj["address"]={
//     plotno:85,
//     area:"shivaji nagar",
//     wardno:3,
//     teshil:"hingna",
//     pincode:441110
// }
// obj["height"]="5.7"
// obj["weight"]="55kg"

//index  0 1 2 3 4 5 6 7 8 9
let arr=[1,2,3,4,5,6,7,8,9,0]


// let obj={}
// obj["name"]="hemant"
// obj["age"]=25
// obj["address"]={
//     plotno:85,
//     area:"shivaji nagar",
//     wardno:3,
//     teshil:"hingna",
//     pincode:441110
// }
// obj["height"]="5.7"
// obj["weight"]="55kg"



// console.log(obj)

// obj["weight"]="60kg"

// console.log(obj)
// obj["name"]="preatiksha"

// console.log(obj)


// obj["age"]=obj["age"]-3;

// obj.address.plotno=25
// obj.address.pincode=5555555
// console.log(obj)


let car={



}
car["carname"]="Tiago"
car["modelno"]=46622
car["Mcompany"]=2001
car["colour"]="white"
car["No.ofseats"]=5
car["enginecc"]="dieselengine"

console.log(car)

car["colour"]="yellow"
car["No.ofseats"]=10


console.log(car["carname"]);
for(var x in car){
if(x=="colour")
{
    car[x]="green"
}
console.log(x+"---->"+ car[x])

}
let obj={}
obj["name"]="hemant"
obj["age"]=25
obj["address"]={
    plotno:85,
    area:"shivaji nagar",
    wardno:3,
    teshil:"hingna",
    pincode:441110
}
obj["height"]="5.7"
obj["weight"]="55kg"

for(var x in obj){
    if(x=="age") 
    {
        obj[x]="22"
    }
    console.log(x+obj[x])
}


//   01234
str="abcde"
console.log(str.length);

