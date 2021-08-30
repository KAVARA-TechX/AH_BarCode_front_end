import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const AdminCreateProduct = ({history}) =>{
    const [select,setSelect] = useState("");
    useEffect(() => {
        if (window.localStorage.getItem("userName") !== "admin") {
            history.push("/admin");
        }
    },);
    const handleClick = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
    }
    const handleLogout = (e) =>{
        e.preventDefault();
        window.localStorage.removeItem("userName");
        history.push("/admin");
    }
    return(
        <div className="d-flex" id="wrapper">
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div className="list-group list-group-flush">
                    <Link to="/admin/add-product" className="list-group-item list-group-item-action list-group-item-light p-3" >Add Product</Link>
                    <Link to="/admin/products"    className="list-group-item list-group-item-action list-group-item-light p-3" >Products</Link>
                    <Link to="/admin/orders"      className="list-group-item list-group-item-action list-group-item-light p-3" >Orders</Link>
                    <Link to="/admin/clients"     className="list-group-item list-group-item-action list-group-item-light p-3" >Clients</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" onClick={handleLogout} >Logout</Link>
                </div>
            </div>
            <div id="page-content-wrapper" className="ml-3">
            <i className="fas fa-bars ml-2" id="sidebarToggle" onClick={handleClick}></i>

                <h4 className="mt-4 ml-2">Add Product(s)</h4>        
                <div class="container-fluid">
                    <form>
                    <select className="form-select mb-5" aria-label="Default select example"
                        onChange={(e)=>{
                            setSelect(e.target.value);
                        }}
                        >
                                <option >Choose the User Type</option>
                                <option value="Single Product">Add Single Product</option>
                                <option value="Excel Sheet">Add Excel Sheet</option>
                            </select>
                            {select ==="Single Product" ? "Product Create Form" 
                            : 
                            select ==="Excel Sheet" ? 
                            <div>
                                <label>Choose File</label>
                            <input type="file" className="form-control"/> 
                            </div>:"" }
                    </form>
                </div>
            </div>
        </div>
    );
}



export default AdminCreateProduct;