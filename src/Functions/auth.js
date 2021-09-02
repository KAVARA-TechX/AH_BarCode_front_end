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