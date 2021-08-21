import React,{useState} from 'react';

const RetailUser = () =>{
    const [name,setName] = useState("");
    const [company,setCompany] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
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
                            <label>Address</label>
                            <input 
                            className="form-control"
                            value={address}
                            onChange={e=>setAddress(e.target.value)}
                            placeholder="Sector 22,Noida..."
                            />
                            <button className="button mt-3">Submit</button>
                            </form>

                            </div>
    );
}

export default RetailUser;