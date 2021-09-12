import React,{useEffect, useState} from 'react';
import logo from '../Images/brand-white.png';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
const Nav = () =>{
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        if( window.location.href === "http://localhost:3000/product-scan" ){
            setLoading(true);
        }else{
            setLoading(false);
        }
    });

    let dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch({
            type: 'LOGOUT',
            payload:null
          }); 
    }
    return(
        <>
        {loading ? <div style={{display:'inline'}}>
        <Link to="/"><img src={logo} alt="AH International" className="logoImg" /></Link>
            <div className="options">
            <a style={{color:"#000",cursor:'pointer',paddingRight:'10px'}} onClick={handleLogout}>Logout</a>
            <Link style={{color:"#000"}} to="/store"><i style={{fontSize:'30px'}} className="fas fa-book"></i></Link>
            <Link style={{color:"#000"}} to="/cart"><i style={{fontSize:'32px'}} className="fas fa-clipboard-list"></i></Link>
            </div>
        </div>:
        <Link to="/"><img src={logo} alt="AH International" className="logoImg" /></Link>
    }
        </>
    );
}

export default Nav;