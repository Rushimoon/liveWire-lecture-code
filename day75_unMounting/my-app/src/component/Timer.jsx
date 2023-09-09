import {useState,useEffect} from 'react'

function Timer() {
    const [count, setCount] =useState(10);
  

     useEffect(()=>{

       
       
     const intervalId=setInterval(()=>{
        console.log("use effect is called"+ Date.now())
         
        setCount((prevCount)=>{
            if(prevCount<=1)
            {
              clearInterval(intervalId)
              return 0;
            }
            console.log(prevCount)
            return prevCount-1;
            
          })

     },2000)

     const cleanUpFun=()=>{
        clearInterval(intervalId)
    }
    return cleanUpFun

    })




    return (
    <div>
      <h1>value of count:{count}</h1>
    </div>
  )
}
export default  Timer ;