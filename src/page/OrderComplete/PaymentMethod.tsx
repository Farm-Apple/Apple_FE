import styled from "styled-components";

const PaymentMethodContainer = styled.section`
    display:flex;
    gap:2rem;
    padding: 5rem 20rem;
`
const PaymentMethodWrap = styled.div`
    flex:1;
`
const ResultPayInfo = styled.div`
    flex:1;
`

const PaymentMethodTitle = styled.h4`
    font-size:2.4rem;
    padding-bottom:2rem;
    border-bottom: 2px solid #c4c4c4;
`

const PaymentLabelWrap = styled.div`
    display:flex;
    align-items:center;
    padding:2rem 1rem ;
    border-bottom: 2px solid #c4c4c4;
    gap:2rem;
`
const PaymentLabel = styled.label`
    display:flex;
    align-items:center;
    gap:1rem;
    cursor:pointer;
    
    & input{
        width:1.5rem;
        height:1.5rem;
    }
    & p{
        font-size:1.6rem;
    }
`

export default function PaymentMethod() {
    return (
        <>
            <PaymentMethodContainer>
                <PaymentMethodWrap>
                    <PaymentMethodTitle>결제수단</PaymentMethodTitle>
                    <PaymentLabelWrap>
                        <PaymentLabel>
                            <input type="radio" name="paymentMethod"/>
                            <p>신용/체크카드</p>
                        </PaymentLabel>
                        <PaymentLabel>
                            <input type="radio" name="paymentMethod"/>
                            <p>무통장 입금</p>
                        </PaymentLabel>
                        <PaymentLabel>
                            <input type="radio" name="paymentMethod"/>
                            <p>휴대폰 결제</p>
                        </PaymentLabel>
                        <PaymentLabel>
                            <input type="radio" name="paymentMethod"/>
                            <p>네이버페이</p>
                        </PaymentLabel>
                        <PaymentLabel>
                            <input type="radio" name="paymentMethod"/>
                            <p>카카오페이</p>
                        </PaymentLabel>
                    </PaymentLabelWrap>
                </PaymentMethodWrap>
                <ResultPayInfo>

                </ResultPayInfo>
            </PaymentMethodContainer>
        </>
    )
}