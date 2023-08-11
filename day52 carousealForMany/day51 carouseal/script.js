let images=[`https://cdn.wallpapersafari.com/10/43/UJ0tqH.jpg`,`https://wallpaperaccess.com/full/3238251.jpg`,`https://wallpaperaccess.com/full/1940064.jpg`,`https://mcdn.wallpapersafari.com/medium/50/85/cMDJOV.jpg`]

let slider=document.getElementById("slider");
let image=document.createElement("img");
    image.setAttribute("class","iiii")
    image.src=images[0];
    slider.append(image)
let i=1;
let setint=setInterval(function(){
    slider.innerHTML="";
    
    image.src=images[i];
    slider.append(image);
    i++
   if(i>=images.length)
   {
    i=0
   }
},2000)


function prev(){
    clearInterval(setint)
    i--
    if(i<0)
    {
     i=images.length-1
    }
   clearInterval(setint)
    slider.innerHTML="";
    image=document.createElement("img");
    image.src=images[i];
    slider.append(image);

}

function next(){
    clearInterval(setint)
    i++
    if(i>=images.length)
    {
     i=0
    }
   clearInterval(setint)
    slider.innerHTML="";
    image=document.createElement("img");
    image.src=images[i];
    slider.append(image);
   
}