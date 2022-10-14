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
      const { user_id } = res.data;
      console.log('Fez login ein', res)
      // const user: any = jwt(access_token);

      localStorage.setItem('user_id', user_id)
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

// Definir interface
interface Configuration {
  pet_limits: number,
  value_hour: number,
  sheduler_active: Boolean,
}



export const configurate = (data: any): Promise<any> => {
  const user = localStorage.getItem('user_id')
  let url = `/:${user}/configurations`
  return api.post(
    url,
    data
  )
}

export const getConfigurate = (): Promise<any> => {
  const user_id = localStorage.getItem('user_id')
  let url = `/${user_id}/configurations`
  return api.get(
    url
  )
}

export const scheduler = (data: any): Promise<any> => {
  // let url = `/:${data.user_id}/configurations`
  const user = localStorage.getItem('user_id')
  console.log('Esses são os dados enviados -> ', data)
  return api.post(
    `/${user}/scheduler`,
    data
  )
}

export const getSchedulers = (): Promise<any> => {
  // let url = `/:${data.user_id}/configurations`
  const user = localStorage.getItem('user_id')
  return api.get(
    `/${user}/scheduler?separate=false`
  )

}

export const getPets = (): Promise<any> => {
  // let url = `/:${data.user_id}/configurations`
  const user = localStorage.getItem('user_id')
  return api.get(
    `/${user}/scheduler?all_pets=true`
  )

}

export default api;
