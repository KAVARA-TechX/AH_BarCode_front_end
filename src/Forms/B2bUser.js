import React, { useState } from 'react';
import data from '../states-and-districtsof_india.json';

const B2bUser = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [desg, setDesg] = useState("");
    const [dep,setDep] = useState("");
    const [states,setState] = useState("");
    const [dis,setDis] = useState("");
    const onHandleSumbit = (e) => {
        e.preventDefault();
        console.log(name, email, company, phone,dep,desg);
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
                <label>Designation</label>
                <input className="form-control"
                    value={desg}
                    onChange={e => setDesg(e.target.value)}
                    placeholder="Manager,Cheif..."
                />
                <label>Department</label>
                <select className="form-control" 
                onChange={(e)=>{setDep(e.target.value)}}>
                    <option>Please Choose a value</option>
                    <option>Owner</option>
                    <option>Consultant</option>
                    <option>Genral Manager</option>
                    <option>Chef</option>
                    <option>Food &amp; beverage</option>
                    <option>House Keeping</option>
                    <option>Front Office</option>
                    <option>Engineering Purchase</option>
                    <option>Loss &amp; Prevention</option>

                </select>
                <label>Company name</label>
                <input className="form-control"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder="ABCD Inc" />
                <label>Email address</label>
                <input className="form-control"
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
                <input className="form-control" placeholder="Address Line 1"/>
                <br/>
                <input className="form-control" placeholder="Address Line 2"/>
                <button className="button mt-3">Submit</button>
            </form>
        </div>
    );
}

export default B2bUser;