let images=[`https://cdn.wallpapersafari.com/10/43/UJ0tqH.jpg`,`https://wallpaperaccess.com/full/3238251.jpg`,`https://wallpaperaccess.com/full/1940064.jpg`,`https://mcdn.wallpapersafari.com/medium/50/85/cMDJOV.jpg`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaMSiE86icECswkCSNQnKy5VlBENkDqR1RlvRNGkTfu1XIejlJ-o7rJFNLgGdsuLTWaM&usqp=CAU`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktO2_uQX-Fsism2oBEW576aVFCgBmZxobBk3JIG4gJ0zx32iXOtwtE_4hdqHsZweqYQo&usqp=CAU`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSHR2bJC7g2cJimxpuS2h1z0tCCbdVvdM_5KJwppI8nEHI58Suw5xBKYrtES2ZnhbkNs&usqp=CAU`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswCaZ8SnJo2qFSK9aaJ5O774GgB-7fS_PKqic4GRn6upOg0S5GzFDV6duxFaW-brUISM&usqp=CAU`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFxe8KA04MtjDpBwokpva9FtGoR-YUOemA12HCTSOVUf8dTuJ3x7mM2EbD3GbKtL49_M&usqp=CAU`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEwLZ213IaLiTCJozNSlCwy-S5AnsKu92XI3ow-vqAToj7I1eCJTWrHz0XuwnkWTxiF4&usqp=CAU`,`https://www.theglobeandmail.com/resizer/KmBndpronBW1t2siJzDdFx1A5vQ=/1200x0/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/tgam/SZDFUGUW3FFTTMMPY6LRKQ2RYU.jpg`]

let slider=document.getElementById("slider");
let image=document.createElement("img");
    
    image.setAttribute("class","iiii")
    image.src=images[0];
  
let image2=document.createElement("img");
    image2.setAttribute("class","iiii")
    image2.src=images[1];   

let image3=document.createElement("img");
    image3.setAttribute("class","iiii")
    image3.src=images[2]; 
    slider.append(image,image2,image3)


let i=1;

let setint=setInterval(mycarouseal,2000);
function mycarouseal(){
    slider.innerHTML="";
    if(i>images.length)
    {
     i=0
    }  
    console.log(i)
 let image=document.createElement("img");
    image.setAttribute("class","iiii")
    image.src=images[i++];

    if(i>images.length)
    {
     i=0
    }
    console.log(i);
let image2=document.createElement("img");
    image2.setAttribute("class","iiii")
    image2.src=images[i++];   
    if(i>images.length)
    {
     i=0
    }
    console.log(i);
   
    let image3=document.createElement("img");
    image3.setAttribute("class","iiii")
    image3.src=images[i++]; 
    if(i>images.length)
    {
     i=0
    }
    console.log(i);
    i=i-2;
    if(i<0)
    {
     i=0
    }
   slider.append(image,image2,image3)
   console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
}
function buttonoperated(i){
    slider.innerHTML="";
    if(i>=images.length)
    {
     i=0
    }  
    console.log(i)
 let image=document.createElement("img");
    image.setAttribute("class","iiii")
    image.src=images[i++];

    if(i>=images.length)
    {
     i=0
    }
    console.log(i);
let image2=document.createElement("img");
    image2.setAttribute("class","iiii")
    image2.src=images[i++];   
    if(i>=images.length)
    {
     i=0
    }
    console.log(i);
   
    let image3=document.createElement("img");
    image3.setAttribute("class","iiii")
    image3.src=images[i++]; 
    if(i>=images.length)
    {
     i=0
    }
    console.log(i);
    i=i-2;
    if(i<0)
    {
     i=0
    }
   slider.append(image,image2,image3)
   console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
}


function prev(){
 

    clearInterval(setint)
    i++
    if(i>=images.length)
    {
     i=0
    }
    buttonoperated(i)
}

function next(){
    
    clearInterval(setint)
    i--
    if(i<0)
    {
     i=images.length-1
    }
    

    buttonoperated(i)
}