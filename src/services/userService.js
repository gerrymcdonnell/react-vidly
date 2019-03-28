import http from "./httpService";
import { apiUrl } from "../config.json";
import { register } from './../serviceWorker';

const apiEndpoint = apiUrl + "/users";

export function register(user){
    return http.post(apiEndpoint,{
            email: user.email,
            password:user.password,
            name:user.name
        }
    );
}