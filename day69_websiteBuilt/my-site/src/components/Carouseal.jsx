import React from 'react'

export default function Carouseal(props) {
 const imgStyle={
    width:"80%",
    height:"400px"

 } 
  
   
    return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={imgStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiZUqBCtmF5gd0UieJQR2OtwG9uQ1one2LSvZy_BHLzLTNmQZpwqhRpoW24Wsrz6Fw10&usqp=CAU" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={imgStyle} src="https://static.photocdn.pt/images/articles/2018/12/05/articles/2017_8/beginner_photography_mistakes-1.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={imgStyle} src="https://media.istockphoto.com/id/609714420/photo/young-woman-takes-pictures-of-nature.jpg?s=170667a&w=0&k=20&c=6ZsyeDl_6BTIMNPapPPYV8w0ZyWXSwgdgFzIyUZhWNE=" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
