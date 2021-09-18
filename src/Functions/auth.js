import axios from "axios";

export const signup = async(name,email,phoneNumber,address,password,role,companyName,designation,department) =>{
    await axios.post('https:/ahinternationals.herokuapp.com/api/auth/signup',{
        name,email,password,companyName,phoneNumber,designation,department,address,
        roles:[role]
    });
}

export const signin = async(name,password) =>{
    return await axios.post('https:/ahinternationals.herokuapp.com/api/auth/signin',{
        name,password});
}

export const getUsers = async()=>{
    return await axios.get("https://ahinternationals.herokuapp.com/api/all");
}

export const getB2BUsers = async()=>{
    return await axios.get("https://ahinternationals.herokuapp.com/api/B2B");
}

export const getRetailUsers = async()=>{
    return await axios.get("https://ahinternationals.herokuapp.com/api/retail");
}

