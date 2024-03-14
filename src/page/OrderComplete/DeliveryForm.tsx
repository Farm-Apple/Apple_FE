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

export default function DeliveryForm() {
    return (
        <>
            <DeliveryFormContainer>
                <DeliveryFormTitle>배송정보</DeliveryFormTitle>
                <DeliveryFormSubTitle>주문자 정보</DeliveryFormSubTitle>
            </DeliveryFormContainer>
        </>
    )
}