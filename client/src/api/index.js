import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const signUp = (FormData) => API.post('/signup', FormData);
export const signIn = (FormData) => API.post('/login', FormData);

export const getProducts = () => API.get('/products');
export const getProductDetails = (id) => API.get(`/product/${id}`);

export const addToCart = (id) => API.get(`/product/${id}`);

export const payUsingPaytm = (data) => API.post(`/payment`, data);