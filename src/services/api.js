import axios from "axios";


const api = axios.create({
    baseURL:"http://localhost:3000"
})
api.interceptors.request.use(async config =>{
    config.headers.get ={'Content-Type' :'application/json'};
    return config;
} )

  export default api;