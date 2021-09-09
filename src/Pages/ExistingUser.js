import React, { useState } from 'react';
import { toast } from 'react-toastify';
import B2bUser from '../Forms/B2bUser';
import { signin } from '../Functions/auth';
import Nav from '../Nav/HeaderNav';
import { useDispatch } from 'react-redux';
const ExistingUser = ({history}) =>{
    const [name,setName] = useState("");
    const [pwd,setPwd] = useState("");
    const [select,setSelect] = useState("");

    let dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name,pwd);
        signin(name,pwd).then((res)=>{
            // console.log(res.data);
            dispatch({
                type:"LOGGED_IN_USER",
                payload:{
                    id: res.data.id,
                    name: res.data.name,
                    email:res.data.email,
                    role:"b2b"
                }
            });
            history.push("/product-scan");
        }).catch(err=>{
            console.log(err);
            toast.error("Invalid User");
        });
    }
    return(
        <div className="container mb-5">
            <Nav/>
            <h3 style={{color:'a7a936'}} className="text-center">Existing User</h3>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                    <label>User Type</label>
                        <select className="form-select"
                        onChange={(e)=>{
                            setSelect(e.target.value);
                        }}
                        >
                                <option >Choose the User Type</option>
                                <option value="B2B">B2B User</option>
                                <option value="Retail">Retail User</option>
                            </select>

                            {select === "B2B" ?
                            <B2bUser/>
                            :
                            select === "Retail" ? 
                                <form onSubmit={handleSubmit}>
                                <label>Email address</label>
                            <input className="form-control"
                            value={name} 
                            onChange={e=>setName(e.target.value)}
                            placeholder="email@address.com" />
                            <label>Password</label>
                            <input type="password" className="form-control"
                            value={pwd} 
                            onChange={e=>setPwd(e.target.value)}
                            placeholder="xxxxxxxxx" />
                            <button className="button mt-3">Login</button>
                            </form>
                            :
                            ""
                        }
                        
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ExistingUser;