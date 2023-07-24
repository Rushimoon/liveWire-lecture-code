async function getdata()
{
event.preventDefault()
let productform=document.getElementById("product_form");
let id=productform.nid.value;
let productName=productform.productName.value;
let productPrice=productform.productPrice.value
let productImg=productform.productImage.value
let obj={
   id,
   productName,
   productPrice,
   productImg
}
//post or add data to data base
 await fetch(`http://localhost:3000/products`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
   "Content-Type":"application/json"
    }


})

//update request
}

async function updateData()
{
event.preventDefault()
let productUpdateform=document.getElementById("productUpdate_form");
let id=productUpdateform.nid.value;
let productName=productUpdateform.productName.value;
let productPrice=productUpdateform.productPrice.value
let productImg=productUpdateform.productImage.value
let obj={
   id,
   productName,
   productPrice,
   productImg
}
// console.log(obj);
// post or add data to data base
 await fetch(`http://localhost:3000/products/${id}`,{
    method:"PATCH",
    body:JSON.stringify(obj),
    headers:{
   "Content-Type":"application/json"
    }


})


// update

    // let res= await fetch("http://localhost:3000/posts/2",{
    //     method:"PATCH",
    //     body:JSON.stringify({name:"moon"}),
    //     headers:{
    //    "Content-Type":"application/json"
    //     }
    // })
    // let data=await res.json()
    // console.log(data)




}




