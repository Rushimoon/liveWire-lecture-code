import React from 'react'
import { useState } from 'react'; 
const getData=(url)=>{
    return fetch(url).then((res)=>res.json())
    
    }
function Posts() {
  
    const [loading,setLoading]=useState(false); 
    const [posts,setPosts]=useState([]);
    const [err,setErr]=useState(false);


 const  fetchAndUpdateData=async ()=>{

try {
    setLoading(true);
    const data=await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=7` 
        )
        console.log(data)
        setPosts(data);
        setLoading(false);
        console.log(data)

} catch (error) {
    
    console.log(error)
    setErr(true);
    setLoading(false);

}



}
if(loading){
    return <h1>loading....</h1>
 }
 if(err){
    return <h1>Something went wrong</h1>

 }

    return (
       <>
       <h1>Posts</h1>
        <hr />
       
    <div>
      {fetchAndUpdateData()}
    </div>
       </>
        
  )
}

export default Posts ;