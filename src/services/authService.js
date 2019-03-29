import http from "./httpService";
import { apiUrl } from "../config.json";
//jwt decode npm i jwt-decode@2.2.0
import jwtDecode from 'jwt-decode';

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJWT());

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    //store jwt in localstorage
    localStorage.setItem(tokenKey, jwt);
}


export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

//get jwt from local storage
export function getJWT() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    logout,
    getCurrentUser,
    loginWithJwt,
    getJWT
}