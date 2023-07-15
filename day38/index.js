

function searchmovie(){
    // console.log("button is pressed")
let input=document.getElementById("search_box").value;
console.log(input);
}


// arr=[1,2,3,4,5,6,7,"this","is","example","of","forEach"]
// // arr.forEach(el=>{
// //     console.log(el)
// // });

  arr=[1,2,3,4,5,6]

arr.forEach(ghumo);


// function ghumo(item,index,arr){
// console.log(`this is item---${item}+"   this is index of item ---"+${index}+" this is arr----${arr}"+`)
// }

function ghumo(item,index,arr){
console.log(`this is item---${item+10}`)
}
console.log("foreach ka arr"+ arr);



let map_arr=arr.map(humaramap);


function humaramap(item,index,arr){
return item*10;
}
console.log("map ka arr"+   map_arr);



students=["vaibhav","hemant","triveni","pratiksha"];
students.forEach(function(el,i,arr){

console.log(el)


})