import axios from 'axios';
const lmsAPIHostProd = "http://api.lms.net";
const lmsAPIHostDev = "http://localhost:3001";
const lmsAPIHost =process.env.NODE_ENV ==="development"? lmsAPIHostDev :lmsAPIHostProd;

const instance = axios.create({
    baseURL: lmsAPIHost

});
export default instance;