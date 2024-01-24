import { instance } from '../auth/axiosInstance';

export const getProductDetail = async (id: number) => {
  const response = await instance.get(`/products/${id}`);
  return response.data;
};
