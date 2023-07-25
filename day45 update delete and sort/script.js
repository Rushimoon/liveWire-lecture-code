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
   let prodid=document.getElementById("prodid").value;
   let selecttag=document.getElementById("selectTag");
   let selectedvalue=selecttag.value;
   console.log(selectedvalue);
   let new_value=document.getElementById("upvalue").value;
   console.log(selectedvalue+"          "+new_value)
// event.preventDefault()
// let productUpdateform=document.getElementById("productUpdate_form");
// let id=productUpdateform.nid.value;
// let productName=productUpdateform.productName.value;
// let productPrice=productUpdateform.productPrice.value
// let productImg=productUpdateform.productImage.value
// let obj={
//    id,
//    productName,
//    productPrice,
//    productImg
// }
// console.log(obj);
// post or add data to data base
 await fetch(`http://localhost:3000/products/${prodid}`,{
    method:"PATCH",
    body:JSON.stringify({selectedvalue:new_value}),
    headers:{
   "Content-Type":"application/json"
    }
})







}


// delete 

async function deletedata(){


   let delid=document.getElementById("deleteid").value;

   await fetch(`http://localhost:3000/products/${delid}`,{
      method:"DELETE",
    
  })
}


