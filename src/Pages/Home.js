import React from 'react';
import {Link} from 'react-router-dom';
import HeaderCarousel from '../Carousel/HeaderCarousel';
import Nav from '../Nav/HeaderNav';
const Home = () =>{
    return(
        <div>
          <Nav/>
          <HeaderCarousel/>
      <div className="row mt-5 pt-5 mb-5">
        <div className="col-md-6 btn-center mb-3">
        <button className="button btn-float-right"><Link style={{color:'#8F774A',textDecoration:'none'}} to="/existing-user">Existing User</Link></button>
        </div>
        <div className="col-md-6 btn-center">
          <button className="button"><Link style={{color:'#8F774A',textDecoration:'none'}} to="/new-user" >New User</Link></button>
        </div>
      </div>
    </div>
    );
}

export default Home;