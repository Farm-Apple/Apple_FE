import styled from "styled-components";

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
const InputDirectionColumnWrap = styled.label`
    display:flex;
    flex-direction:column;
    gap:1rem;
`

export default function DeliveryForm() {
    return (
        <>
            <DeliveryFormContainer>
                <DeliveryFormTitle>배송정보</DeliveryFormTitle>
                <DeliveryFormSubTitle>주문자 정보</DeliveryFormSubTitle>
                <DeliveryFormLabel>
                    <DeliveryFormText>이름</DeliveryFormText>
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
                <DeliveryFormLabel>
                    <DeliveryFormText>이메일</DeliveryFormText>
                    <DeliveryFormInputDefault></DeliveryFormInputDefault>
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
                <DeliveryFormLabel>
                    <DeliveryFormText>배송주소</DeliveryFormText>
                    <InputDirectionColumnWrap>
                        <DeliveryFormInputDefault></DeliveryFormInputDefault>
                        <DeliveryFormInputLong></DeliveryFormInputLong>
                        <DeliveryFormInputLong></DeliveryFormInputLong>
                    </InputDirectionColumnWrap>
                </DeliveryFormLabel>
                <DeliveryFormLabel>
                    <DeliveryFormText>배송메시지</DeliveryFormText>
                    <DeliveryFormInputLong></DeliveryFormInputLong>
                </DeliveryFormLabel>
            </DeliveryFormContainer>
        </>
    )
}