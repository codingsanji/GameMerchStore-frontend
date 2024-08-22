import axios from 'axios';

const axiosclient = axios.create({
    baseURL: 'https://gamemerchstore-api.onrender.com'
  });

export default axiosclient


