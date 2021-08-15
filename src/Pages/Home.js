import React from 'react';
import {Link} from 'react-router-dom';
const Home = () =>{
    return(
        <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-md-6">
        <button className="button float-right"><Link style={{color:'#8F774A'}} to="/existing-user">Existing User</Link></button>
        </div>
        <div className="col-md-6">
          <button className="button"><Link style={{color:'#8F774A'}} to="/new-user" >New User</Link></button>
        </div>
      </div>
    </div>
    );
}

export default Home;