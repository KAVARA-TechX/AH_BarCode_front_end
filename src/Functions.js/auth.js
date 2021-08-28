import axios from "axios";

export const signup = async(name,email,password,role) =>{
    await axios.post('http://localhost:8080/api/auth/signup',{
        name,email,password,
        roles:[role]
    });
}