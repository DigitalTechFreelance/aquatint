import axios from 'axios'; 


export const baseURL = 'http://localhost:1337/'

let defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json' ,
    }

const instance = axios.create({
    baseURL: baseURL,
    headers: defaultHeaders
});

export default instance;





