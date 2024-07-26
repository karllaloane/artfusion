import axios from 'axios';

const api = axios.create({
    baseURL:
        'http://ec2-15-228-226-239.sa-east-1.compute.amazonaws.com:8089/api',
});

export default api;
