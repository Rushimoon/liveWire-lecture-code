function navbar(){
    return `
    <div id="navbar">
    <div id="block1">
        <div class="b1a">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="">
        </div>
        <div class="b1b">
            <a class="ex" href="">Explore</a>
            <a class="pl" href="">Plus</a>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="">

        </div>

    </div>
    <div id="block2">
        <input class="bl2a" type="text" placeholder="Search for products, brands and more">
        <button class="bl2b" onclick="welcome()"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>

    </div>
    <div id="block3">
        <button class="login" onclick="welcome2()">Login</button>
    </div>
    <div id="block4">
        <a class="link1" href="">Become a seller</a>
    </div>
    <div id="block5">
        <a class="link2" href="">More</a>
    </div>
    <div id="block6">
        <i class="fa-solid fa-cart-shopping"></i>
        <a class="link3" href="./pages/cartpage.html">Cart</a>
    </div>

</div>

    `
}

export default navbar  ;
