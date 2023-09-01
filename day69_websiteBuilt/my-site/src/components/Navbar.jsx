import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav id="navbar">
        <img src={props.img} alt="logo was here" id="logo"/>
        <div id="links">
            <a  class="catego" href="">MEN</a>
            <a class="catego" href="">WOMEN</a>
            <a class="catego" href="">KIDS</a>
            <a class="catego" href="">HOME&LIVING</a>
            <a class="catego" href="">BEAUTY</a>
            <a class="catego" href="">STUDIO</a>
        </div>
       
       <div id="searchbar">
        <button id="searchbtn"><i class="fa-solid fa-magnifying-glass"></i></button>
        <input id="searchbox"  type="text" placeholder="Search for products brands and more"/>
       </div>
       <div id="option">
         <div>
            <i  class="fa-regular fa-user isize"></i>
            <p class="name">profile</p>
         </div>
         <div>
            <i class="fa-regular fa-heart  isize"></i>
            <p class="name" >Wishlist</p>
         </div>
         <div>
            <i class="fa-solid fa-bag-shopping  isize"></i>
            <p class="name" >Bag</p>
         </div> 

       </div>

    </nav>
    </div>
  )
}
