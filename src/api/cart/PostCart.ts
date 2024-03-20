import { postInstance } from "../auth/axiosInstance";
import { AxiosRequestConfig } from "axios";

interface CartItem extends AxiosRequestConfig<any> {
  product_id: number;
  quantity: number;
  product_image?: string;
  price: number;
}

export const PostCart = async (CartItem: CartItem) => {
  console.log(CartItem);
  const response = await postInstance.post("/carts", CartItem);
  return response.data;
};