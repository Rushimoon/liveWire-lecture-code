let container=document.getElementById("container");
async function submited(){
   container.innerHTML="";
   let inputval=document.getElementById("input").value;
   try{
    
    let mydata= await fetch(`https://www.omdbapi.com/?s=${inputval}&apikey=82dd9e8`)

   //  console.log(mydata)
    let finaldata= await mydata.json(); 
   //  console.log(finaldata.S)   
    finaldata.Search.forEach(display)
  
     }
     catch{
        console.log("eror")
     }

}




function display(el,i,arr){
//    console.log("============================================================") 
  console.log("elements-"+" "+el.Title +el.Year+"   index"+i)
let card=document.createElement("div");
card.setAttribute("class","card");
let poster=document.createElement("img");
poster.src=el.Poster
poster.setAttribute("id","poster")
let title=document.createElement("h1");
 title.innerText=el.Title;
 title.setAttribute("id","title")
let year=document.createElement("h2");
year.innerText=el.Year;
year.setAttribute("id","year")
card.append(poster,title,year)
container.append(card)

}
let id;
function debounce(func,delay){

  if(id){
   clearTimeout
  }

 id=setTimeout(function(){
      
     func()


 },delay) 

}


