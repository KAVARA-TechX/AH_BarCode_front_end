import axios from "axios";

export const signup = async(name,email,phoneNumber,address,password,role,companyName,designation,department) =>{
    await axios.post('http://localhost:8080/api/auth/signup',{
        name,email,password,companyName,phoneNumber,designation,department,address,
        roles:[role]
    });
}