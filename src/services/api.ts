import axios from 'axios';

const API_URL = 'url';

const api = axios.create({ baseURL: API_URL });

// export const login = (email: string, password: string): Promise<any> => {
//   return api.post(
//     'oauth/token'
//   )
// }

export default api;
