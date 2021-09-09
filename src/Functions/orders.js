import axios from "axios";
export const getOrders = async() =>{
    return await axios.get(`http://ahinternationals.herokuapp.com/api/orders`);
}

export const createOrder = async(productList) =>{
    return await axios.get(`http://ahinternationals.herokuapp.com/api/order`,{productList},{});
}