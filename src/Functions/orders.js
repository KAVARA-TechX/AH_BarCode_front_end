import axios from "axios";
export const getOrders = async() =>{
    return await axios.get(`https://ahinternationals.herokuapp.com/api/orders`);
}

export const createOrder = async(products,orderedBy,totalAmount,discount) =>{
    return await axios.post(`https://ahinternationals.herokuapp.com/api/order/`,{products,orderedBy,totalAmount,discount},{});
}