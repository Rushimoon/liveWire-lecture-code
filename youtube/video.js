import {navbar} from './components/navbar.js'
let nav_data=document.querySelector("#navbar")
nav_data.innerHTML=navbar()
let searchdiv=document.getElementById("searchdiv")
searchdiv.onclick=()=>
{
    window.location.replace("index.html")
}

window.onload=selectedvideo()

 function selectedvideo()
{
 let {snippet}=JSON.parse(localStorage.getItem("selectedVideo"));   
let {videoId}=JSON.parse(localStorage.getItem("selectedVideo"));
let div=document.createElement("div")
 let iframe=document.createElement("iframe")
iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
iframe.setAttribute("id","videoattr")
iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
iframe.allow="fullscreen"
let videodisplay=document.querySelector("#leftc")
let title=document.createElement("h4")
 title.innerText=snippet.title
let channelTitle=document.createElement("h6")
channelTitle.innerText=snippet.channelTitle

div.append(iframe,title,channelTitle)
videodisplay.append(div)

}
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/QWq2AuugTeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}