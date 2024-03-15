import OrderCompleteList from "../../page/OrderComplete/OrderCompleteList.tsx";
import DeliveryForm from "../../page/OrderComplete/DeliveryForm.tsx";
import PaymentMethod from "../../page/OrderComplete/PaymentMethod.tsx";
// import useInput from "@/hook/useInput.tsx";


export default function OrderCompletePage() {

    // const[orderer, , onChangeOrderer] = useInput('');

  return (
      <>
          <OrderCompleteList/>
          <DeliveryForm/>
          <PaymentMethod/>
      </>
  )
}

