import axios from "axios";

export const createProduct = async(product) =>{
    return await axios.get(`https://ahinternationals.herokuapp.com/api/create-product`,{product},{});
}

export const getProducts = async() =>{
    return await axios.get(`https://ahinternationals.herokuapp.com/api/products`);
}

export const createProducts = async(productlist) =>{
    return await axios.post(`https://ahinternationals.herokuapp.com/api/productlist/`,{productlist},{});
}

export const getProductById = async(productId) =>{
    return await axios.get(`https://ahinternationals.herokuapp.com/api/product/${productId}`);
}

export const deleteProductById = async(productId) =>{
    return await axios.delete(`https://ahinternationals.herokuapp.com/api/product/${productId}`);
}
