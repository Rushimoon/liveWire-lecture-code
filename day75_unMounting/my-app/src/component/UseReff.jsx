import { useState, useEffect, useRef }  from 'react'

export default function UseReff() {
 
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
  
    useEffect(() => {
      count.current = count.current + 1;
    });
    return (
    <div>
        <h1>data</h1>
         <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* <h1>Render Count: {count.current}</h1> */}
        {console.log(count)}
    </div>
  )
}
