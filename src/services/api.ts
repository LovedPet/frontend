import axios, { AxiosRequestConfig } from 'axios';
import jwt from 'jwt-decode';
import toast from 'react-hot-toast';

const API_URL = 'https://lovedpet.herokuapp.com/';

const api = axios.create({ baseURL: API_URL });

const USER = 'USER_ID';
const TOKEN_KEY = '@LovedPet:token';

interface DataRegister {
  name: string,
  email: string,
  name_nursed: string
}


const requestHandler = (request: AxiosRequestConfig) => {
  const savedToken = localStorage.getItem(TOKEN_KEY);
  if(savedToken) {
    request.headers.Authorization = savedToken;
  }

  return request;
}

api.interceptors.request.use((request) => requestHandler(request))/

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(error.response) {
      if(error.response.status === 401){
        toast.error('Sua sessão expirou! Faça seu login novamente.');
        return Promise.reject();
      }
    }
    return Promise.reject(error);
  }
)

export const login = (email: string, password: string): Promise<any> => {
  return api.post(
    '/login',
    {
      "email":email,
      "password": password
    }
  )
    .then((res) => {
      // const { access_token } = res.data;
      console.log('Fez login ein')
      // const user: any = jwt(access_token);


      // localStorage.setItem(TOKEN_KEY, access_token);
      // localStorage.setItem(USER, user)
      return res;
    })
}

export const register = (data: any): Promise<any> => {
  console.log('OLha os dadossss ', data)
  return api.post(
    '/register',
    data
  )

}


export default api;
