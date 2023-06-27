// document.getElementById("sform").addEventListener("submit",takeform())
// function takeform(){

// }

let arr=[];
document.getElementById("sform").addEventListener("submit",function(){
event.preventDefault();
let student={}
let fname=document.getElementById("fname").value
let lname=document.getElementById("lname").value
let email=document.getElementById("email").value
let pass=document.getElementById("pass").value
let mobile=document.getElementById("mobile").value

student["firstName"]=fname;
student["lastName"]=lname;
student["Email"]=email;
student["password"]=pass;
student["mobile"]=mobile;
// console.log(fname,lname,email,pass,mobile)
// console.log(student)
arr.push(student);
console.log(arr)
// localStorage.clear()
localStorage.setItem("studentdata",JSON.stringify(arr))
})
// localStorage.setItem("qwewqe","1234213423");



