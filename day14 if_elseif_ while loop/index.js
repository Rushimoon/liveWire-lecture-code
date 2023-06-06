var signal;
signal="yellow";
console.log(signal=="yellow");
// only if statements
// if(signal=="red"){
// console.log("STOP")
// }
// if(signal=="yellow"){
//     console.log("Start your gadi and be ready")
// }
// if(signal=="green"){
//     console.log("GOOOO")
// }

//fixed in system
var password =123456;
var mobile =987654;


//user input 
var entpass=123456;
var entmobile=987654;

if(mobile==entmobile){
    console.log("mobile num is correct enter password");
    if(password==entpass)
    {
        console.log("correct password login sucessfull");
    }else{
        console.log("please enter correct password");
    }
}else{
     console.log("please enter correct mobile number");
}

// if elseif elseif if 
signal="green";
console.log(signal=="yellow");

if(signal=="red"){
console.log("STOP")
}
else if(signal=="yellow"){
    console.log("Start your gadi and be ready")
}
else{
    console.log("GOOOO")
}

signal="green";
// switch syntax 
switch(signal){

case "red" :console.log("STOP");
                break;
case "yellow" :console.log("READY");
                break;
case "green" :console.log("GO"); 
                break;
 default : console.log("ENter  correct values");             

}

console.log("my nane is vaibhav");


// initilization
// while(condition){

//     increment/decrement
// }


let i=100 ;
while(i>0){
    console.log(i);
    i--;
}



// apply else if else 
// design a bank security system where user needs to enter username and password match them with 
// system username and password  print massage successfull ;

// design a system for atm where atm no and pin needs tobe match and print msg of teansaction successfull ; 


// while loop 
// print all even numbers upto 50 ;
// print all odd numbers upto 50 ;