import React from 'react';
import slide1 from '../Images/sl1.jpg';
import slide2 from '../Images/sl2.jpg';
import slide3 from '../Images/sl3.jpg';
const HeaderCarousel = () =>{
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators" >
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="contained">
      <img class="d-block w-100" src={slide1} alt="First slide" />
      <div class="centered">
        <h2>ASIA'S LEADING INNOVATIVE
FF&amp;E AND OS&amp;E AGGREGATOR</h2>
      </div>
      </div>
    </div>
    <div class="carousel-item">
    <div class="contained">
      <img class="d-block w-100" src={slide2} alt="Second slide" />
      <div class="centered">
        <h2>WE REALIZE WHAT YOU<br/>
IMAGINE</h2>
      </div>
      </div>
    </div>
    <div class="carousel-item">
    <div class="contained">
      <img class="d-block w-100" src={slide3} alt="Third slide" />
      <div class="centered">
        <h2>OUR UNIQUE DESIGNS<br/>
TAKES CENTER STAGE AGAIN</h2>
      </div>
      </div>
    </div>
  </div>
  <a style={{display:'none'}} class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a style={{display:'none'}} class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    );
}

export default HeaderCarousel;