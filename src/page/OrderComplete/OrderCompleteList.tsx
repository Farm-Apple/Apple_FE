import styled from "styled-components";
import {useEffect, useState} from "react";
import {GetOrderCompleteList} from "../../api/auth/auth.ts";
import {OrderListPropsType, SendDeliveryDataType} from "@/page/OrderComplete/index.tsx";

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
    border-bottom:1px solid #767676;
    justify-content:center;
    align-items:center;
`
const OrderListProductInfo = styled.div`
    flex:3;
    display:flex;
    gap:2rem;
    padding:3rem;
`
const OrderListDiscount = styled.div`
    flex:2;
    display:flex;
    justify-content:center;
    padding:3rem;
    font-size:1.8rem;
`
const OrderListDeliveryFee = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    padding:3rem;
    font-size:1.8rem;
    color:#767676;
`
const OrderListOrderFee = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    padding:3rem;
    font-size:1.8rem;
    font-weight:bold;
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

const OrderTotalPriceContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: flex-end;
    align-items:center;
    margin-top:3rem;
    gap:3rem;
`
const OrderTotalPriceTitle = styled.p`
    font-size:1.8rem;
`
const OrderTotalPrice = styled.p`
    font-size:2.4rem;
    font-weight:bold;
    color:#EB5757;
`
const NonOrderCompleteList = styled.p`
    padding:5rem 0;
    font-size:2.4rem;
    font-weight:bold;
    text-align:center;
`
export interface OrderList{
    created_at: string;
    id:number;
    price:number;
    product: ProductType;
    product_id:number;
    product_image:null;
    quantity:number;
    updated_at:string;
    user_id:number;
}
export interface ProductType{
    detail: string,
    created_at: string,
    id: number,
    is_opened:number,
    price:number,
    product_name:string,
    updated_at:string,
    weight:string,
}
export default function OrderCompleteList({totalPrice,setTotalPrice, setSendData}: OrderListPropsType) {
    // user 로그인 시 넘어올 데이터가 전역상태관리가 되던지, 여기서 한번 더 호출하던지 해야됨 ( localStorage로 선조치 or token으로 user 배송기본정보 받아오는 api 개발 )
    const [orderList, setOrderList] = useState<OrderList[]>([]);

    useEffect(() => {
        GetOrderCompleteList()
            .then((response) => {
                setOrderList(response);
                let totalPriceResult = 0;
                response.forEach((item:OrderList) => {
                    totalPriceResult += item.price * item.quantity
                })

                setTotalPrice(totalPriceResult);
                console.log(response);
                let result:ProductType[] = [];
                response.forEach((item:OrderList) => {
                    result.push(item.product);
                })
                // 결제 정보에 대한 data order_items에 추가
                setSendData((prevState) => {
                    return {...prevState, order_items: result } as SendDeliveryDataType;
                });
            })
    },[])

    return (
        <OrderCompleteContainer>
            <OrderCompleteTitle>주문 / 결제하기</OrderCompleteTitle>
            <OrderListIndicatorUl>
                <OrderListIndicatorLi>상품정보</OrderListIndicatorLi>
                <OrderListIndicatorLi>할인</OrderListIndicatorLi>
                <OrderListIndicatorLi>배송비</OrderListIndicatorLi>
                <OrderListIndicatorLi>주문금액</OrderListIndicatorLi>
            </OrderListIndicatorUl>

            {
                orderList.length > 0 ?
                orderList.map((item) => {
                    return(
                        <>
                            <OrderListCardContainer>
                                <OrderListProductInfo>
                                    <OrderListCardImage></OrderListCardImage>
                                    <OrderListCardDescUl>
                                        <OrderListCardDescLi>{item.product.detail}</OrderListCardDescLi>
                                        <OrderListCardDescLi>{item.product.product_name}</OrderListCardDescLi>
                                        <OrderListCardDescLi>수량: {item.quantity}개</OrderListCardDescLi>
                                    </OrderListCardDescUl>
                                </OrderListProductInfo>
                                <OrderListDiscount>-</OrderListDiscount>
                                <OrderListDeliveryFee>무료배송</OrderListDeliveryFee>
                                <OrderListOrderFee>{(item.price * item.quantity).toLocaleString()}원</OrderListOrderFee>
                            </OrderListCardContainer>
                        </>
                    )
                })
                    :
                    (
                        <OrderListCardContainer>
                            <NonOrderCompleteList>결제할 상품이 없습니다.</NonOrderCompleteList>
                        </OrderListCardContainer>
                    )

            }
            <OrderTotalPriceContainer>
                <OrderTotalPriceTitle>총 주문금액</OrderTotalPriceTitle>
                <OrderTotalPrice>{totalPrice?.toLocaleString()}원</OrderTotalPrice>
            </OrderTotalPriceContainer>
        </OrderCompleteContainer>
    )
}

