import React, { useState } from 'react';
import { signup } from '../Functions.js/auth';
import { useHistory } from "react-router-dom";
import data from '../states-and-districtsof_india.json';
import { useDispatch } from 'react-redux';

const RetailUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dis,setDis] = useState("");
    const [states,setState] = useState("");
    const [password,setPassword] = useState("");
    const [adrs1,setAdrs1] = useState("");
    const [adrs2,setAdrs2] = useState("");
    let history = useHistory();
    let dispatch = useDispatch();
    const onHandleSumbit = (e) => {
        e.preventDefault();
        let address = adrs1+" "+adrs2+","+dis+","+states;
        console.log(name, email, phone, address, password);
        signup(name, email, phone, address, password,"retail").then((res)=>{
            console.log(res);
            dispatch({
                type:"LOGGED_IN_USER",
                payload:{
                    name: name,
                    email:email,
                    role:"retail"
                }
            });
            if(typeof res === 'undefined'){
                history.push("/product-scan");
            }
        })
        .catch(err=>console.log(err));
        setName("");
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
                    <div className="row">
                        <div className="col-md-6">
                        <select className="form-control" onChange={(e)=>{setState(e.target.value);}}>
                    <option>Please Choose your state</option>
                {data.states.map(function (object,i) {
                return <option key={i} value={object.state} >{object.state}</option>
            } )}
                </select>
                        </div>
                        <div className="col-md-6">
                        {states !== ""}
                <select disabled={states === ""} className="form-control" onChange={(e)=>{setDis(e.target.value);}}>
                    {data.states.map(function (object,i){
                        if(object.state === states){
                         return <>
                             {object.districts.map(function (district,id){
                                 return <option key={id} value={district}>{district}</option>
                             })}
                         </>
                        }
                    })}
                </select>
                        </div>
                    </div>
                    <br/>
                    <input 
                    className="form-control" 
                    value={adrs1} 
                    onChange={(e)=>setAdrs1(e.target.value)} 
                    placeholder="Address Line 1"/>
                <br/>
                <input 
                className="form-control" 
                value={adrs2} 
                onChange={(e)=>setAdrs2(e.target.value)} 
                placeholder="Address Line 2"/>
                <label>Password</label>
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    placeholder="********"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="button mt-3 mb-5">Submit</button>
            </form>

        </div>
    );
}

export default RetailUser;