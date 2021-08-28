import React, { useState } from 'react';
import { signup } from '../Functions.js/auth';
import { useHistory } from "react-router-dom";
const RetailUser = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password,setPassword] = useState("");

    let history = useHistory();
    const onHandleSumbit = (e) => {
        e.preventDefault();
        console.log(name, email, company, phone);
        signup(name,email,password,"retail").then((res)=>{
            if(res === undefind){
                history.push("/product-scan");
            }
        })
        .catch(err=>console.log(err));
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
    }
    return (
        <div>
            <form onSubmit={onHandleSumbit} >
                <label>Full Name</label>
                <input className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="First and Last Name" />
                <label>Email address</label>
                <input type="text" className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email@address.com" />
                <label>Phone Number</label>
                <input className="form-control"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="(+123)-45678901" />
                <label>Address</label>
                <input
                    className="form-control"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="Sector 22,Noida..."
                /><label>Password</label>
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="button mt-3">Submit</button>
            </form>

        </div>
    );
}

export default RetailUser;