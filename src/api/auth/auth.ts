import { instance } from '../auth/axiosInstance';
interface FormData {
  email: string;
  password: string;
  name: string;
  nickname: string;
  phone: string;
}
export const signUp = async (formdata: FormData) => {
  const response = await instance.post('/users', formdata);
  console.log(response.data);
  return response;
};
