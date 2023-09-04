import React  from "react";

function Todo(){
const [text,setText]= React.useState("");
const [todos,setTodos]=React.useState([]);
const handleChange=(e)=>{
setText(e.target.value);
}
const handleAdd=(e)=>{
const newItem={
    title:text,
    status:false,
}
const todoAfterAddition={...todos,newItem}
setTodos(todoAfterAddition);

}
console.log(todos);

return(
    <div>
<div>
      
<input type="text" name="" id="" value={text} onChange={handleChange} />
{/* <input type="text" name="" id="" value={text} /> */}
<button onClick={handleAdd}>click</button>
<p>{text}</p>

</div>

    </div>
)

}
export default Todo ;