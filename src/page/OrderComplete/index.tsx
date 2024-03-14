import OrderCompleteList from "../../page/OrderComplete/OrderCompleteList.tsx";
import DeliveryForm from "../../page/OrderComplete/DeliveryForm.tsx";
import PaymentMethod from "../../page/OrderComplete/PaymentMethod.tsx";


export default function OrderCompletePage() {
  return (
      <>
          <OrderCompleteList/>
          <DeliveryForm/>
          <PaymentMethod/>
      </>
  )
}

