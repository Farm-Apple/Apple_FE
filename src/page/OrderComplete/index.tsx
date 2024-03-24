import OrderCompleteList from "../../page/OrderComplete/OrderCompleteList.tsx";
import DeliveryForm from "../../page/OrderComplete/DeliveryForm.tsx";
import PaymentMethod from "../../page/OrderComplete/PaymentMethod.tsx";
import React, {useState} from "react";

export interface OrderListPropsType{
    totalPrice:number;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export default function OrderCompletePage() {

    const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
      <>
          <OrderCompleteList totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
          <DeliveryForm/>
          <PaymentMethod totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
      </>
  )
}

