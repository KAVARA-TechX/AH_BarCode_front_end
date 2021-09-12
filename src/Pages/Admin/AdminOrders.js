import React,{useEffect} from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { getOrders } from '../../Functions/orders';

const AdminOrders = ({history}) =>{
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        if (window.localStorage.getItem("userName") !== "admin") {
            history.push("/admin");
        }
        getOrders().then((res)=>setOrders(res.data)).catch(err=>console.log(err));
    },[]);
    const Orders = () =>{
        setTimeout(()=>{
            // getOrders().then((res)=>setOrders(res.data)).catch(err=>console.log(err));
        },5000)
    }
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
            {console.log(orders)}
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">AH International</div>
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
                <h4 className="mt-4 ml-2">Orders</h4>        
                <div class="container-fluid">
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Order_Id</th>
                            <th scope="col">Product list/quantity</th>
                            <th scope="col">Total amount</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Ordered at</th>
                        </tr>
                        {orders.map((order)=>(
                                <tr>
                                <td>{order._id}</td>
                                <td><ul>{order.products !== undefined && order.products.length > 0?order.products.map((product)=>(
                                    <li>{product.productId}{typeof product.quantityBought !== 'undefined' ? ` / ${product.quantityBought}`:""}</li>
                                )) : "No products or quantity"}</ul></td>
                                <td>{typeof order.totalAmount !=='undefined' ? order.totalAmount :0}</td>
                                <td>{typeof order.discount !=='undefined' ? order.discount :0}</td>
                                <td>on {new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString()}</td>
                                </tr>    
                        ))}
                    </thead>
                </table>
                </div>
            </div>
        </div>
    );
}



export default AdminOrders;