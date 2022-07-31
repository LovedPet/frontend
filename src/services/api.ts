import axios from 'axios';

const API_URL = 'https://lovedpet.herokuapp.com/';

const api = axios.create({ baseURL: API_URL });

interface DataRegister {
  name: string,
  email: string,
  name_nursed: string
}


// export const login = (email: string, password: string): Promise<any> => {
//   return api.post(
//     'oauth/token'
//   )
// }

export const register = (data: any): Promise<any> => {
  return api.post(
    '/register',
    data
  )

}


export default api;
