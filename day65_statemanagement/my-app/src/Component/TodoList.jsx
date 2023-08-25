import {useState} from "react"




function TodoList(){
 
    const changetext=(e)=>{
       console.log("typed")
         setTodos(e.target.value)
    }
    
    let [todos,setTodos]=useState("");
return(
    <div>
      <input type="text" name="" id="" value={todos} onChange={changetext} />
      <h1>{todos}</h1>
      <button>button</button>
   

    </div>
)

}
export default TodoList ;