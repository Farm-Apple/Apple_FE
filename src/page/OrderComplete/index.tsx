import styled from "styled-components";


const OrderCompleteContainer = styled.section`
  padding:3rem 20rem;
  margin-top:13rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const OrderCompleteTitle = styled.h3`
  font-size:3.6rem;
  font-weight:700;
`
const OrderListIndicatorUl = styled.ul`
    width: 100%;
    display: flex;
    background-color: #dcdcdc;
    margin-top: 5rem;
    font-size: 1.8rem;
    border-radius: 2rem;

`
const OrderListIndicatorLi = styled.li`
    padding:3rem;
    text-align:center;
    
    &:nth-child(1){
        flex:3;
    }
    &:nth-child(2){
        flex:2;
    }
    &:nth-child(3){
        flex:1;
    }
    &:nth-child(4){
        flex:1;
    }
`
const OrderListCardContainer = styled.div`
    width:100%;
    display:flex;
    padding:3rem 2rem;
    border-bottom:1px solid #767676;
`
const OrderListProductInfo = styled.div`
    flex:3;
    display:flex;
    gap:2rem;
`
const OrderListCardImage = styled.div`
    width:12rem;
    height:12rem;
    background-color:hotpink;
    border-radius:1rem;
`
const OrderListCardDescUl = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:1rem;
`
const OrderListCardDescLi = styled.li`
    &:nth-child(1){
        font-size:1.4rem;
        color:#767676;
    }
    &:nth-child(2){
        font-size:1.8rem;
        color:black;
    }
    &:nth-child(3){
        font-size:1.4rem;
        color:#767676;
    }
`

export default function OrderCompletePage() {
  return (
      <OrderCompleteContainer>
        <OrderCompleteTitle>주문 / 결제하기</OrderCompleteTitle>
          <OrderListIndicatorUl>
              <OrderListIndicatorLi>상품정보</OrderListIndicatorLi>
              <OrderListIndicatorLi>할인</OrderListIndicatorLi>
              <OrderListIndicatorLi>배송비</OrderListIndicatorLi>
              <OrderListIndicatorLi>주문금액</OrderListIndicatorLi>
          </OrderListIndicatorUl>
          <OrderListCardContainer>
              <OrderListProductInfo>
                  <OrderListCardImage></OrderListCardImage>
                  <OrderListCardDescUl>
                      <OrderListCardDescLi>개쩌는 사과</OrderListCardDescLi>
                      <OrderListCardDescLi>부사사과10kg</OrderListCardDescLi>
                      <OrderListCardDescLi>수량: 1개</OrderListCardDescLi>
                  </OrderListCardDescUl>
              </OrderListProductInfo>
          </OrderListCardContainer>
      </OrderCompleteContainer>
  )
}

