import axios from 'axios';

const API_URL = 'url';

const api = axios.create({ baseURL: API_URL });

export default api;