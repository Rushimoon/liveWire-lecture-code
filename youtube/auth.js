import {navbar} from "./components/navbar.js"


let dispaly_nav=document.getElementById("navbar")
dispaly_nav.innerHTML=navbar()
class User {
 
constructor(){

}

validateUsername (username)
{
    return username.includes('@') ? false : true ;

}
validatePassword(password)
{
    return password.length < 8 ? false : true ;
}
 
async singup(n,e,u,p,m,d)
{
 // console.log(n,e,u,p,m,d)
  let  isvalidated= this.validateUsername(u) && this.validatePassword(p);
  // console.log(isvalidated)
  if(isvalidated)
  {
    this.name=n;
    this.email=e;
    this.username=u;
    this.password=p;
    this.mobile=m;
    this.description=d;
  
  
    const register_api=`https://masai-api-mocker.herokuapp.com/auth/register`

    const response= await fetch(register_api,{
    method:'POST',
    body: JSON.stringify(this),
    headers:{
    'Content-Type':'application/json'
    },

});
 const data = await response.json()
  console.log("data", data)
}
}
async login(u,p){
  const login_data={
    username:u,
    password:p
  }
  console.log(login_data)
  const login_api=`https://masai-api-mocker.herokuapp.com/auth/login`;
  let res=await fetch (login_api,{
    method:"POST",
    body:JSON.stringify(login_data),
    headers:{
      "Content-Type":"application/json",
    },
  })
  let log_data= await res.json()
  console.log("data",log_data)
  return log_data
}

}
let register_btn=document.getElementById("register_id")
register_btn.onclick=()=>{
  Register()
}

let user= new User()
function Register()
{
    let reg_form=document.getElementById("reg_form")
    const name=reg_form.name.value
    const email=reg_form.email.value
    const password=reg_form.password.value
    const username=reg_form.username.value
    const mobile=reg_form.mobile.value
    const description=reg_form.description.value

   user.singup(name,email,username,password,mobile,description)
  //  console.log("user:",user)
   
}
let login_btn=document.getElementById("login_id")
 login_btn.onclick=()=>{
  Login()
 }
let Login=async ()=>{
let username=document.getElementById("login-username").value
let password=document.getElementById("login-password").value
let {token}=await user.login(username,password)
getprofile(username,token)
}
// d8578edf8458ce06fbc5bb76a58c5ca4
//5e81f9859d223ea420aca993c647b839
let user_detials=document.getElementById("user_detials")
let user_serverdata
let getprofile=async (username,token)=>{
  let api_link=`https:masai-api-mocker.herokuapp.com/user/${username}`
  let res=await fetch(api_link,{
    headers:{
      Authorization: `Bearer ${token}`,
      "Content-Type":"application/json"
    }
  })
  user_serverdata=await res.json()
  
  console.log("data:",user_serverdata)
  // let user_detials=document.getElementById("user_detials")
  user_detials.innerText=user_serverdata.name
}
// {name: 'rosschandler', email: 'rosschandler1998@gmail.com', username: 'rosschandler', mobile: '091587', token: '3f26c82c67e7fea85a51b61ec386e4dd', …}

//   user_detials.innerText=user_serverdata.name