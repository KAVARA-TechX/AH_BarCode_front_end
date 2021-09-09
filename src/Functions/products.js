import axios from "axios";

export const getProducts = async() =>{
    return await axios.get(`http://ahinternationals.herokuapp.com/api/products`);
}

export const getProductById = async(productId) =>{
    return await axios.get(`https://ahinternationals.herokuapp.com/api/product/${productId}`);
}