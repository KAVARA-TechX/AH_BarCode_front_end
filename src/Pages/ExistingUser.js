import React, { useState } from 'react';

const ExistingUser = () =>{
    const [email,setEmail] = useState('');
    const onHandleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        setEmail('');
    }
    return(
        <div >
            <h3 style={{color:'a7a936'}} className="text-center">Existing User</h3>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                    <form onSubmit={onHandleSubmit}>
                        <label>Email:-</label>
                        <input className="form-control"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        placeholder="Enter client Email..."/>
                        <button className="button mt-3">Login</button>
                    </form>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ExistingUser;