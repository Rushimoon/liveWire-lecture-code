import react from 'react'
import React from 'react'

export default function counter() {
    const [count,setCount]=useState(0);
    return (
    
    <div>
       <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}/> 
    </div>
  )
}

 