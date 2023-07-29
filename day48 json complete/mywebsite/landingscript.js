 const baseUrl =`http://localhost:3000/products`


let containerdiv=document.getElementById("containerdiv");
//loads the result a soon as window loads

window.onload = paginate(1);

async function submited(){
   containerdiv.innerHTML="";
   
   try{
    
    let mydata= await fetch(`${baseUrl}`)
    console.log(mydata)

   //  console.log(mydata)
    let finaldata= await mydata.json(); 
    console.log(finaldata)   
    finaldata.forEach(display)
  
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
let productImgcard=document.createElement("img");
productImgcard.src=el.productImg
productImgcard.setAttribute("id","productImg")
let productName=document.createElement("h1");
 productName.innerText=el.productName;
 productName.setAttribute("id","productName")
let Category=document.createElement("h2");
Category.innerText=el.Category;
Category.setAttribute("id","Category")
let productPrice=document.createElement("h2");
productPrice.innerText=el.productPrice;
productPrice.setAttribute("id","productPrice")

card.append(productImgcard,productName, productPrice,Category)
containerdiv.append(card)

}



async function showWomensData(){

    containerdiv.innerHTML="";
   
    try{
     
     let mydata= await fetch(`${baseUrl}?Category=womens`)
   //   console.log(mydata)
 
    //  console.log(mydata)
     let finaldata= await mydata.json(); 
     console.log(finaldata)   
     finaldata.forEach(display)
   
      }
      catch{
         console.log("eror")
      }




}

async function sort_lth(){

   containerdiv.innerHTML="";
   
   try{
    
    let mydata= await fetch(`${baseUrl}?_sort=productPrice&_order=asc`)
    console.log(mydata)

   //  console.log(mydata)
    let finaldata= await mydata.json(); 
    console.log(finaldata)   
    finaldata.forEach(display)
  
     }
     catch{
        console.log("eror")
     }


}
async function sort_htl(){

   containerdiv.innerHTML="";
   
   try{
    
    let mydata= await fetch(`${baseUrl}?_sort=productPrice&_order=desc`)
    console.log(mydata)

   //  console.log(mydata)
    let finaldata= await mydata.json(); 
    console.log(finaldata)   
    finaldata.forEach(display)
  
     }
     catch{
        console.log("eror")
     }


}

 async function paginate(value){
   try{
      containerdiv.innerHTML="";
      let mydata= await fetch(`${baseUrl}?_page=${value}&_limit=10`)
    //   console.log(mydata)
  
     //  console.log(mydata)
      let finaldata= await mydata.json(); 
      console.log(finaldata)   
      finaldata.forEach(display)
    
       }
       catch{
          console.log("eror")
       }
}