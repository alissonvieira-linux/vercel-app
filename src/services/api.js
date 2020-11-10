import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vieiratech.herokuapp.com',
});

export default api;