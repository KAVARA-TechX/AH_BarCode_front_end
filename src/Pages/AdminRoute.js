import React,{useState} from "react";

const AdminRoute = ({history}) =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
const handleSubmit = (e) =>{
    e.preventDefault();
    if(username === "" && password === ""){
        alert("Please Enter both the fields");
    }else if (username !== "admin" && password !== "admin"){
        alert("Invalid Credentials");
    }else if(window.localStorage.getItem("usernNme") === null){
        window.localStorage.setItem("userName",username);
        history.push("/admin/dashboard");
    }
}
return(
<div className="container-fluid">
    <div className="row">
        <div className="col-md-3"></div>
    <form onSubmit={handleSubmit} className="col-md-6">
        <h2>Admin login</h2>
        <label>Enter userName</label>
        <input className="form-control" onChange={e=> setUsername(e.target.value)} />
        <label>Enter password</label>
        <input className="form-control" onChange={e=> setPassword(e.target.value)} />
        <button className="button mt-3">Login</button>
    </form>
    <div className="col-md-3"></div>
    </div>
</div>
);
}

export default AdminRoute;