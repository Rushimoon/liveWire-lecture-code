async function getdata()
{
event.preventDefault()
let mainform=document.getElementById("task_form");
let id=mainform.nid.value;
let task=mainform.ntask.value;
let prio=mainform.npriority.value

let obj={
    id,
    task,
    prio
}
 await fetch(`http://localhost:3000/tommorow`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
   "Content-Type":"application/json"
    }


})



}




