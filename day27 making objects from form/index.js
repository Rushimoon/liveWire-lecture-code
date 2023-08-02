
// let data=JSON.parse(localStorage.getItem("userData")||[]);
let data=[];
let form=document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
    let obj={}
    let name= document.getElementById("fname").value
   
    let mobile=document.getElementById("mobile").value
   
    let password=document.getElementById("pin").value

    obj["name"]=name
    obj["mobile"]=mobile
    obj["password"]=password
    data.push(obj)
    console.log(data)
    document.getElementById("form").reset();
    localStorage.setItem("userData",JSON.stringify(data))
  //  localStorage.clear();
   console.log(JSON.parse(localStorage.getItem("userData")));
  });
  // console.log(JSON.parse(localStorage.getItem("userData")));
  
   

//   name,surname, email , password , mobilno, add, dob

