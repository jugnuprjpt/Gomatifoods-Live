import React from 'react'

const Slider = () => {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 " src="../img/slider-1.jpeg" alt="First slide" style={{width:"500px", height:"500px" }}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 " src="../img/Slider-2.png" alt="Second slide"style={{width:"500px", height:"500px" }}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 " src="../img/chfather23.jpg" alt="Third slide"style={{width:"500px", height:"500px" }}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 " src="../img/final.jpg" alt="fourth slide"style={{width:"500px", height:"500px" }}/>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </>
  )
}

export default Slider
