import Card from "./Card";

import React from 'react'

export default function ContainerCard() {
   const containerStyles={
    width:"80%",
    height:"auto",
    border:"3px solid red",
    margin:"auto",
    display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",
    gap:"50px"   
     
    
   }
 let prodArr= [
    {
      id: "1",
      productName: "onePlus1",
      productPrice: 1000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "2",
      productName: "onePlus2",
      productPrice: 2000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "3",
      productName: "onePlus3",
      productPrice: 3000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "4",
      productName: "onePlus4",
      productPrice: 4000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "5",
      productName: "onePlus5",
      productPrice: 5000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "6",
      productName: "onePlus6",
      productPrice: 6000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "7",
      productName: "onePlus7",
      productPrice: 7000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "8",
      productName: "onePlu8",
      productPrice: 8000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "9",
      productName: "onePlus9",
      productPrice: 9000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "10",
      productName: "onePlus10",
      productPrice: 9000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "11",
      productName: "onePlus11",
      productPrice: 11000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "12",
      productName: "onePlus12",
      productPrice: 12000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "13",
      productName: "onePlus13",
      productPrice: 13000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "14",
      productName: "onePlus14",
      productPrice: 14000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "15",
      productName: "onePlus15",
      productPrice: 15000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "16",
      productName: "onePlus16",
      productPrice: 16000,
      Category: "mobiles",
      productImg: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
    },
    {
      id: "17",
      productName: "watch",
      productPrice: 25000,
      Category: "mens",
      productImg: "https://rukminim2.flixcart.com/image/832/832/kjom6q80-0/watch/f/k/e/lcs-8246-lois-caron-original-imafz75nxgvduazm.jpeg?q=70"
    },
    {
      id: "19",
      productName: "handbag",
      productPrice: 6000,
      Category: "womens",
      productImg: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/7/m/o/stylish-and-trendy-pu-leather-ladies-bag-ajhb-25023-shoulder-bag-original-imagrukrhjngytbh.jpeg?q=70"
    }
  ]
  let finaldata=prodArr.map((el)=>{
    return(
       <Card productName={el.productName}  productPrice={el.productPrice} img={el.productImg}/>
    )})

    return (
    <div  style={containerStyles} >

      
        {finaldata}

    </div>
  )
}
