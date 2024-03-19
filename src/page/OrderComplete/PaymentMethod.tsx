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
const ResultPayInfoTitle = styled(PaymentMethodTitle)`
    border-bottom: none;
`
const ResultPayInfoBox = styled.div`
    border:2px solid #21BF48;
    border-radius: 2rem;
    overflow:hidden;
`
const ResultPayInfoUl = styled.ul`
    display:flex;
    flex-direction:column;
    padding:2rem;
    gap:2rem;
    border-bottom:1px solid #F2F2F2;
    
    &.none{
        border-bottom:none;
    }
`
const ResultPayInfoLi = styled.li`
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:1.6rem;
    
    & p span{
        font-size: 2rem;
        font-weight:bold;
        margin-right:.2rem;
    }
    & p span.red{
        color:red;
        font-size:2.4rem;
    }
`
const ResultPayConfirm = styled.div`
    padding: 3rem 2rem;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    & label {
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        justify-content: center;
        gap: 2rem;
    }

    & label input {
        width: 1.8rem;
        height: 1.8rem;
    }

    & button {
        padding: 2rem;
        width: 15rem;
        border-radius: 2rem;
        background-color: #C4C4C4;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        transition: .3s;
    }

    & button:hover {
        background-color: red;
        color: white;
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
                    <ResultPayInfoTitle>최종결제 정보</ResultPayInfoTitle>
                    <ResultPayInfoBox>
                        <ResultPayInfoUl>
                            <ResultPayInfoLi>
                                <p>- 상품금액</p>
                                <p><span>46,500</span>원</p>
                            </ResultPayInfoLi>
                            <ResultPayInfoLi>
                                <p>- 할인금액</p>
                                <p><span>46,500</span>원</p>
                            </ResultPayInfoLi>
                            <ResultPayInfoLi>
                                <p>- 배송비</p>
                                <p><span>46,500</span>원</p>
                            </ResultPayInfoLi>
                        </ResultPayInfoUl>
                        <ResultPayInfoUl className="none">
                            <ResultPayInfoLi>
                                <p>- 결제금액</p>
                                <p><span className="red">46,500</span>원</p>
                            </ResultPayInfoLi>
                        </ResultPayInfoUl>
                        <ResultPayConfirm>
                            <label>
                                <input type="checkbox"/>
                                <p>주문내용을 확인하였으며, 정보제공 등에 동의합니다.</p>
                            </label>
                            <button>결제하기</button>
                        </ResultPayConfirm>
                    </ResultPayInfoBox>
                </ResultPayInfo>
            </PaymentMethodContainer>
        </>
    )
}