import {useState} from "react"


function TodoList(){
  const [text,setText]=useState("");
  const [todos,setTodos]=useState([]); 
  const changetext=(e)=>{
      
         setText(e.target.value)
    }
   
   function handleClick(){
       
      let data={
        task:text,
        status:false
      }
      let updateTodo=[...todos,data]
      setTodos(updateTodo);
       
   }

   
   
return(
    <div>
      <input placeholder="enter the task to perform"  type="text" name="" id="" value={text} onChange={changetext} />
      <button  onClick={handleClick}>button</button>
       <ul>
       {todos.map((el)=>{
                return (
                
                  <li>{el.task }---{(el.status)?"compleated":"notCompleated"}</li>
               
                )
              })}
         
       </ul>
    </div>
)

}
export default TodoList ;