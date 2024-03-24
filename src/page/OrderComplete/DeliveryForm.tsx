import styled from "styled-components";
import AddressSearch from "../../page/OrderComplete/AddressSearch.tsx";
import {useState} from "react";
import useInput from "../../hook/useInput.tsx";

const DeliveryFormContainer = styled.section`
    padding: 5rem 20rem;
`
const DeliveryFormTitle = styled.h3`
    font-size:2.4rem;
    padding-bottom:2rem;
    border-bottom: 2px solid #c4c4c4;
`
const DeliveryFormSubTitle = styled(DeliveryFormTitle)`
    font-size:1.8rem;
    padding-bottom:1rem;
    margin-top:5rem;
`
const DeliveryFormLabel = styled.label`
    display:flex;
    align-items:center;
    padding:1rem 0;
    border-bottom:1px solid #c4c4c4;
`
const DeliveryFormText = styled.p`
    font-size:1.6rem;
    width:200px;
`

const DeliveryFormInputDefault = styled.input`
    width:350px;
    padding:1rem;
    border:1px solid #c4c4c4;
    outline:none;
    font-size:1.6rem;
`
const DeliveryFormInputShort = styled(DeliveryFormInputDefault)`
    width:100px;
`
const DeliveryFormInputLong = styled(DeliveryFormInputDefault)`
    width:700px;
`
const Dash = styled.div`
    padding:0 1rem;
`

export default function DeliveryForm() {

    const [addressObj, setAddressObj ] = useState({areaAddress: "", townAddress:""});
    const [userName, onChangeUserName] = useInput(localStorage.getItem("userName"))
    const [phoneNumber, onChangePhoneNumber] = useInput(localStorage.getItem("userPhone"));
    const [email, onChangeEmail] = useInput(localStorage.getItem("userEmail"));


    return (
        <>
            <DeliveryFormContainer>
                <DeliveryFormTitle>배송정보</DeliveryFormTitle>
                <DeliveryFormSubTitle>주문자 정보</DeliveryFormSubTitle>
                <DeliveryFormLabel>
                    <DeliveryFormText>이름</DeliveryFormText>
                    <DeliveryFormInputDefault type="text" onChange={(event) => onChangeUserName(event.target.value)} value={userName ?? ""}></DeliveryFormInputDefault>
                </DeliveryFormLabel>
                <DeliveryFormLabel>
                    <DeliveryFormText>휴대폰</DeliveryFormText>
                    <DeliveryFormInputShort type="text" onChange={(event) => onChangePhoneNumber(event.target.value)} value={phoneNumber?.slice(0,3) ?? ""}></DeliveryFormInputShort>
                    <Dash>-</Dash>
                    <DeliveryFormInputShort type="text" onChange={(event) => onChangePhoneNumber(event.target.value)} value={phoneNumber?.slice(3,7) ?? ""}></DeliveryFormInputShort>
                    <Dash>-</Dash>
                    <DeliveryFormInputShort type="text" onChange={(event) => onChangePhoneNumber(event.target.value)} value={phoneNumber?.slice(7,12) ?? ""}></DeliveryFormInputShort>
                </DeliveryFormLabel>
                <DeliveryFormLabel>
                    <DeliveryFormText>이메일</DeliveryFormText>
                    <DeliveryFormInputDefault type="text" onChange={(event) => onChangeEmail(event.target.value)} value={email ?? ""}></DeliveryFormInputDefault>
                </DeliveryFormLabel>
                <DeliveryFormSubTitle>배송지 정보</DeliveryFormSubTitle>
                <DeliveryFormLabel>
                    <DeliveryFormText>수령인</DeliveryFormText>
                    <DeliveryFormInputDefault></DeliveryFormInputDefault>
                </DeliveryFormLabel>
                <DeliveryFormLabel>
                    <DeliveryFormText>휴대폰</DeliveryFormText>
                    <DeliveryFormInputShort></DeliveryFormInputShort>
                    <Dash>-</Dash>
                    <DeliveryFormInputShort></DeliveryFormInputShort>
                    <Dash>-</Dash>
                    <DeliveryFormInputShort></DeliveryFormInputShort>
                </DeliveryFormLabel>
                <AddressSearch addressObj={addressObj} setAddressObj={setAddressObj}>배송주소</AddressSearch>
                <DeliveryFormLabel>
                    <DeliveryFormText>배송메시지</DeliveryFormText>
                    <DeliveryFormInputLong></DeliveryFormInputLong>
                </DeliveryFormLabel>
            </DeliveryFormContainer>
        </>
    )
}