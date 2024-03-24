import OrderCompleteList, {ProductType} from "../../page/OrderComplete/OrderCompleteList.tsx";
import DeliveryForm from "../../page/OrderComplete/DeliveryForm.tsx";
import PaymentMethod from "../../page/OrderComplete/PaymentMethod.tsx";
import React, {useState} from "react";


export interface OrderListPropsType{
    totalPrice:number;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    sendData: object | undefined;
    setSendData: React.Dispatch<React.SetStateAction<SendDeliveryDataType | undefined>>;

}

export interface SendDeliveryDataType{
    id: number;
    order_name: string;
    order_address: string;
    order_phone_number: string;
    delivery_name: string;
    delivery_address: string;
    delivery_phone_number: string;
    delivery_message?: string;
    created_at: Date;
    updated_at: Date;
    carts?: object;
    order_items?: ProductType[];
}

export default function OrderCompletePage() {

    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [sendData, setSendData] = useState<SendDeliveryDataType | undefined>()

  return (
      <>
          <OrderCompleteList totalPrice={totalPrice} setTotalPrice={setTotalPrice} sendData={sendData} setSendData={setSendData}/>
          <DeliveryForm/>
          <PaymentMethod totalPrice={totalPrice} setTotalPrice={setTotalPrice} sendData={sendData} setSendData={setSendData}/>
      </>
  )
}

