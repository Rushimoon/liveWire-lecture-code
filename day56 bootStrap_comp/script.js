let form = document.getElementById("searchForm");
form.addEventListener("submit",formdata)
function formdata(){
    event.preventDefault();
 
    let inputdata=document.getElementById("searchQuery").value 
    console.log(inputdata)
    
}

let mybox=document.getElementById("mybox");
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
    container: 'body'
  })