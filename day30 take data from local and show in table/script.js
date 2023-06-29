// document.getElementById("sform").addEventListener("submit",takeform())
// function takeform(){

// }

let arr=JSON.parse(localStorage.getItem("data"))||[];
document.getElementById("sform").addEventListener("submit",function(){
event.preventDefault();

let fname=document.getElementById("fname").value
let lname=document.getElementById("lname").value
let email=document.getElementById("email").value
let pass=document.getElementById("pass").value
let mobile=document.getElementById("mobile").value
let student={}
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
localStorage.setItem("data",JSON.stringify(arr))
})

let datafromlocal = JSON.parse(localStorage.getItem("data")) ;
console.log(datafromlocal)




















// localStorage.setItem("qwewqe","1234213423");

// let data=JSON.parse(localStorage.getItem("studentdata"))

// console.log(data)
// for(let i=0;i<data.length;i++)
// {
//     let table=document.getElementById("table");
//     let tr=document.createElement("tr");
//     let tdn=document.createElement("td");
//     tdn.innerText=data[0].firstName;
//     let tds=document.createElement("td");
//     tds.innerText=data[0].lastName;   
//     let tde=document.createElement("td");
//     tde.innerText=data[0].Email;
//     let tdm=document.createElement("td");
//     tdm.innerText=data[0].mobile;
//     let tdp=document.createElement("td");
//     tdp.innerText=data[0].password;
    
//     tr.append(tdn,tds,tde,tdm,tdp)
//     table.append(tr)
// }
