import React, { useEffect } from 'react'
import { useState } from 'react'; 
import Postsitem from './Postsitem';
const getData=(url)=>{
    return fetch(url).then((res)=>res.json())
    
    }
const buttonStyle={
    border:"2px solid cyan",
    display:"flex",
    justifyContent:"space-around"


}
function Posts() {
  
    const [loading,setLoading]=useState(false); 
    const [posts,setPosts]=useState([]);
    const [err,setErr]=useState(false);
    const [page,setpage]=useState(1);
   
    useEffect(()=>{
        fetchAndUpdateData(page)
        console.log("inside")
   },[page])

 const  fetchAndUpdateData=async (page)=>{

try {
    setLoading(true);
    const data=await getData(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}}` 
        )
        console.log(data)
        setPosts(data);
        setLoading(false);
     

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

 function handlePage(change){
    let currpage=setpage(page+change)
    console.log(currpage)
 
 }

    return (
       <>
       <h1>Posts</h1>
        <hr />
       
    <div>
    {/* <button onClick={()=>{fetchAndUpdateData()}}>click here to get data</button> */}
      
      <div>

         {
            posts.map((el)=>{
                return(
                    <Postsitem body={el.body} id={el.id} title={el.title}/>
                    
                )
            })
         }


      </div>
        
    </div>
    <div style={buttonStyle} >
        <button disabled={page<=1?true:false} onClick={()=>{handlePage(-1)}}>prev</button>
        <h1>{page}</h1>
        <button disabled={page>=10?true:false} onClick={()=>{handlePage(+1)}} >next</button>
    </div>
       </>
        
  )
}

export default Posts ;