import {useState} from 'react'

export default function Getdata() {
   
    const [input,setInput]=useState("")
    const getData=(url)=>{
        return fetch(url).then((res)=>res.json())
        
        }
    console.log(input);

    const  fetchAndUpdateData=async (page)=>{

        try {
           
            const data=await getData(
               ` https://www.omdbapi.com/?s=${input}&apikey=82dd9e8`
                )
                console.log(data.Search)
              
               
             
        
        } catch (error) {
            
            console.log(error)
           
        
        }
        
        
        
        }
  
  
    return (
    <div>
     
    <input type="text"   value={input} onChange={(e)=>{setInput(e.target.value)}} name="" id="" />
     <button onClick={()=>{fetchAndUpdateData()}} >click here to search movie</button>

    </div>
  )
}
