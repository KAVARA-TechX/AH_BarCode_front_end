import React,{useState} from 'react';

const B2bUser = () =>{
    const [name,setName] = useState("");
    const [company,setCompany] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [desg,setDesg] = useState("");
    const onHandleSumbit = (e) =>{
        e.preventDefault();
        console.log(name,email,company,phone);
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
    }
    return(
<div>
<form onSubmit={onHandleSumbit} >

                            <label>Full Name</label>
                            <input className="form-control" 
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            placeholder="First and Last Name" />
                            <label>Designation</label>
                            <input className="form-control"
                            value={desg}
                            onChange={e=>setDesg(e.target.value)}
                            placeholder="Manager,Cheif..."
                            />
                            <label>Company name</label>
                            <input className="form-control"
                            value={company}
                            onChange={e=>setCompany(e.target.value)}
                            placeholder="ABCD Inc" />
                            <label>Email address</label>
                            <input className="form-control"
                            value={email} 
                            onChange={e=>setEmail(e.target.value)}
                            placeholder="email@address.com" />
                            <label>Phone Number</label>
                            <input className="form-control"
                            value={phone} 
                            onChange={e=>setPhone(e.target.value)}
                            placeholder="(+123)-45678901" />
                            <button className="button mt-3">Submit</button>
                            </form>
                            </div>
    );
}

export default B2bUser;