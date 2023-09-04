import { useState } from "react";

function Counter(){
 const [count,setCount] = useState(0);


 const incCounter=()=>{

        setCount(count+1);
  
 }
 const decCounter=()=>{

    setCount(count-1);

}

return(
    <div>
         <h1>{count}</h1>
       <button  onClick={incCounter}>inc count</button>
       <button  onClick={decCounter}>dec count</button>
    </div>
    
)

}
export default Counter;