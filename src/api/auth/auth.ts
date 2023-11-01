import { instance } from '../auth/axiosInstance';
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
