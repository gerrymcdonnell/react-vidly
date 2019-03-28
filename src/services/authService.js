import http from "./httpService";
import { apiUrl } from "../config.json";

//jwt decode npm i jwt-decode@2.2.0
import jwtDecode from 'jwt-decode';

const apiEndpoint = apiUrl + "/auth";

const tokenKey="token";

async function login(email,password){
    const{data:jwt}=await http.post(apiEndpoint,{ email,password});
    
    //store jwt in localstorage
    localStorage.setItem(tokenKey,jwt);
}


function loginWithJwt(jwt){
    localStorage.setItem(tokenKey,jwt);
}

function logout(){
    localStorage.removeItem(tokenKey);
}

function getCurrentUser(){
    try {
        const jwt=localStorage.getItem(tokenKey);
        return jwtDecode(jwt);        
        } catch (ex) {   
            return null;  
        }
}

export default{
    login,
    logout,
    getCurrentUser,
    loginWithJwt
}