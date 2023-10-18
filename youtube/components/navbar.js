

function navbar()
{

return  ` 
<div> 
    <i class="fa-sharp fa-solid fa-bars" id="icon"></i>
   <a href="index.html"> <img src="https://autome.me/wp-content/uploads/2021/06/Youtube-tv-4k-plus-1024x675.jpg" alt=""></a>
 </div>      

<div id="searchdiv" >
 <input type="text" placeholder="search" id="searchbox">
 <i class="fa-solid fa-magnifying-glass" id="searchMovies" ></i>
  <i class="fa-solid fa-microphone"></i>
</div>
<div>
<a href="auth.html" id="user_detials">click here to login</a>
 <i class="fa-regular fa-clapperboard-play"></i>
 <i class="fa-regular fa-bell"></i>
 <i class="fa-solid fa-user"></i>
 
</div>`

}

 export {navbar};