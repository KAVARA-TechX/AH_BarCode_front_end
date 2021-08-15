import React, {useState} from 'react';

const NewUser = () =>{
    const [name,setName] = useState("");
    const [company,setCompany] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

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
            <h3 className="text-center">Register New User</h3>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <form onSubmit={onHandleSumbit} >
                            <label>Full Name</label>
                            <input className="form-control" 
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            placeholder="First and Last Name" />
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
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewUser;