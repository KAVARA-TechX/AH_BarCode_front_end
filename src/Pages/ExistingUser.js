import React, { useState } from 'react';
import B2bUser from '../Forms/B2bUser';
import Nav from '../Nav/HeaderNav';
const ExistingUser = () =>{
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [select,setSelect] = useState("");
    return(
        <div className="mb-5">
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
                                <form>
                                <label>Email address</label>
                            <input className="form-control"
                            value={email} 
                            onChange={e=>setEmail(e.target.value)}
                            placeholder="email@address.com" />
                            <label>Password</label>
                            <input className="form-control"
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