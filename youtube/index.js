import {navbar} from './components/navbar.js';
let nav_data=document.querySelector("#navbar")
nav_data.innerHTML=navbar()
 
 
let searchbutton= document.querySelector("#searchMovies")
  searchbutton.addEventListener("click",searchVideos)
 
let button_div= document.getElementById("button")
     
   let b1=document.createElement("button")
   b1.innerText="sortbyviews"
   let b2=document.createElement("button")
   b2.innerText="sortbyAlpabate"
   let b3=document.createElement("button")
   b3.innerText="sortbypopularity"
   b1.onclick=()=>{
   
   sortv("viewCount")
   }
   b2.onclick=()=>{
   
    sortv("title")
    }
    b3.onclick=()=>{
   
      sortv("relevance")
      }
   button_div.append(b1)
   button_div.append(b2)
   button_div.append(b3)
  async  function sortv(choice)
   { let ans=choice
    try{
      let searchbox=document.querySelector("#searchbox").value
      const API_KEY="AIzaSyDaa7yEV-EO0ekYiSD7g8ENZq0x90tL1D8"
      let response= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=${ans}&q=${searchbox}&key=${API_KEY}`)
      let data = await response.json()
      let maindata=data.items
       display(maindata)
  }
  catch{
    
      console.log("error")
  }

   }

  
 async function searchVideos()
 {  
    try{
        let searchbox=document.querySelector("#searchbox").value
        
        
        const API_KEY="AIzaSyDaa7yEV-EO0ekYiSD7g8ENZq0x90tL1D8"
        let response= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchbox}&key=${API_KEY}`)
        let data = await response.json()
        let maindata=data.items
         display(maindata)
    }
    catch{
      
        console.log("error")
    }
 }
const display = (maindata) =>{  
  console.log(maindata)
    let container=document.querySelector("#container")
     container.innerHTML=null
    maindata.forEach(({snippet,id:{videoId}})=>{
    let  div=document.createElement("div")
    let  image=document.createElement("img")
    image.src=snippet.thumbnails.high.url
    
    let videoTitle=document.createElement("h5")
    videoTitle.textContent=snippet.title
    
    let channeltitle=document.createElement("h4")
    channeltitle.textContent=snippet.channelTitle
   
   
   
    div.onclick=()=>{
    let clickedVideo={
      snippet,
      videoId
     }
     localStorage.setItem("selectedVideo",JSON.stringify(clickedVideo))
     window.location.replace("video.html")  
    }
    div.append(image,videoTitle,channeltitle)
    container.append(div)
  })
   
   
}