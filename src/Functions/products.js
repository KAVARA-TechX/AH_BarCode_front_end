import axios from "axios";

export const getProducts = () =>{
    return await axios.get(`http://ahinternationals.herokuapp.com/api/products`);
}

export const getProductById = async(productId) =>{
    return await axios.get(`http://ahinternationals.herokuapp.com//api/products/${productId}`);
}