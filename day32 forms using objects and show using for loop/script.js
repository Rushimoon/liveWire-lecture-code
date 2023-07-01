console.log("inside")
class StudentData{
    constructor(fnamaa,lanmeaa,emailaa,passaa,mobileaa){
      this.firstName=fnamaa;
      this.lastName=lanmeaa;
      this.email=emailaa;
      this.password=passaa;
      this.mobile=mobileaa;
    
    }
} 


let arr=JSON.parse(localStorage.getItem("data"))||[];
document.getElementById("sform").addEventListener("submit",function(){
event.preventDefault();

let fname=document.getElementById("fname").value
let lname=document.getElementById("lname").value
let email=document.getElementById("email").value
let pass=document.getElementById("pass").value
let mobile=document.getElementById("mobile").value

let student=new StudentData(fname,lname,email,pass,mobile);
//console.log(student);

arr.push(student);
// console.log(arr)
// // localStorage.clear()
 localStorage.setItem("data",JSON.stringify(arr))
})

