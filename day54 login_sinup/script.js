
form.addEventListener("submit",function(){
 event.preventDefault();
 console.log("inside form");
 let form=document.getElementById("form");
 let name=form.name.value;
 let lname=form.lname.value;
 let mobile=form.mobile.value;
 let gender=form.gender.value;
 let email=form.email.value;
let obj={name,lname,mobile,gender,email};

putdata(obj);


})


async function putdata(obj){

try {
    
let data=await fetch("http://localhost:3000/signup_user_detials",{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        "Content-Type":"application/json"
    }
})



} catch (error) {
  console.log("bhai kuch galat hai")   
}


}
formlogin.addEventListener("submit",function(){
    event.preventDefault();
    
    let form=document.getElementById("formlogin");
    let name=form.name.value;
    let pass=form.lname.value;
    
  
 let obj={name,pass};
      check(obj);

   
   
   })


  
  async function check(obj){

  try {
    let data = await fetch(`http://localhost:3000/signup_user_detials?name=${obj.name}`)   
    let realdata= await data.json();
      console.log(realdata)
      console.log(obj)
    if(realdata.length==0)
    {
        alert("wrong username and password")
    }
    else if( realdata[0].password==obj.pass)
     {
        alert("login success")
     }
     else{
        console.log(realdata.password+"   "+obj.pass)
        alert("wrog pass")
     }
        
    
   
} catch (error) {
 
  }


   }