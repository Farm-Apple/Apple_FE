import { instance } from '../auth/axiosInstance';
import { AxiosRequestConfig } from 'axios';
interface SignUpData {
  email: string;
  password: string;
  name: string;
  nickname: string;
  phone: string;
}
interface LoginData {
  email: string;
  password: string;
}
interface NaverParams extends AxiosRequestConfig<any> {
  code: string | any;
  state: string | any;
}

export const signUp = async (formData: SignUpData) => {
  const response = await instance.post('/users', formData);

  return response;
};
export const Login = async (loginData: LoginData) => {
  const response = await instance.post('/login', loginData);

  return response;
};

export const NaverLogin = async (Param: NaverParams) => {

  const response = await instance.get('/auth/naver/callback', Param);

  return response;
};

export const GetProductList = async() => {
  const response = await instance.get('/products');

  return response.data;
}
