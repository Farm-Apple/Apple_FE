import { instance } from '../auth/axiosInstance';
import { AxiosRequestConfig } from 'axios';
interface SignUpData {
  email: string;
  password: string;
  name: string;
  nickname: string;
  phone: string;
  address: string;
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
  console.log(response.data);
  return response;
};
export const Login = async (loginData: LoginData) => {
  const response = await instance.post('/login', loginData);
  console.log(response.data);
  return response;
};

export const NaverLogin = async (Param: NaverParams) => {
  console.log(Param);
  const response = await instance.get('/auth/naver/callback', Param);
  console.log(response.data);
  return response;
};
