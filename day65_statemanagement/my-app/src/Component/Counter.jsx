import React from "react";


function Counter(){
    const [count,setCount]=React.useState(0);

    const incCount=()=>{
       setCount(count+1);
    } 

    const decCount=()=>{
        setCount(count-1)
    }
return(
    <div>

        <h1>{count}</h1>
    <button onClick={incCount} >inc</button>
    <button onClick={decCount} >dec</button>

    </div>
)

}
export default Counter ;
