import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createOrder } from '../Functions/orders';
import Nav from '../Nav/HeaderNav';

const Cart = () =>{
    var productsList = [];
    const{user,list} = useSelector((state)=>({...state}));
    let dispatch = useDispatch();
    const handleRemove = (product) =>{
        console.log(product);
        for (let index = 0; index < list.length; index++) {
            if(list[index]._id === product){
                list.splice(index,1);
                break;
            }
        }
    if(list.length != 0){
        productsList.push(...list);
    }
    dispatch({
        type:"ADD_TO_LIST",
        payload:productsList
    });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        createOrder(productsList).then((res)=>{
            toast.success("Order Has been placed");
        }).catch(err=>console.log(err));
    }
    return(
        <div className="container">
            <Nav/>
            {list.map((product)=>(
                <div key={product._id} className="card mt-3">
                <div className="card-body">
                    {product.productId} <button onClick={() => handleRemove(product._id)} className="button float-right">Remove Item</button>
                </div>
            </div>
            ))}
            {list.length !== 0 ? <button className="button mt-3" onClick={handleSubmit}>Submit Order</button> :""}
        </div>
    );
}

export default Cart;