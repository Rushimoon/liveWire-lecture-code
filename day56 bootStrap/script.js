let form = document.getElementById("searchForm");
form.addEventListener("submit",formdata)
function formdata(){
    event.preventDefault();
 
    let inputdata=document.getElementById("searchQuery").value 
    console.log(inputdata)
    
}