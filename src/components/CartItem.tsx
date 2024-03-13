import React from "react";
import QuantitySelect from "@common/QuantitySelect";
import styled from "styled-components";

const CartItemContainer = styled.ul``;
const CartItemList = styled.li`
  position: relative;
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  /* justify-content: baseline; */
  align-items: center;
  padding: 20px 0;
`;
const ProductInfoContainer = styled.div``;
const ProductInfoWrapper = styled.div`
  display: flex;
  gap: 36px;
  margin-left: 90px;
`;
const ProductDetailInfo = styled.div`
  display: flex;
  width: 418px;
  flex-direction: column;
  font-size: 12px;
`;
const ProductImage = styled.img`
  border: 1px solid #000;
  border-radius: 10%;
  width: 160px;
  height: 160px;
`;
const ProductTotalPrice = styled.div`
  width: 130px;
  border: 1px solid #000;
  margin-right: 55px;
  margin-left: 148px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
const Price = styled.div``;
const Input = styled.input`
  position: absolute;
  top: 50%;
  left: 28px;
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
`;
const OrderButton = styled.button`
  width: 100%;
`;

const CartItem: React.FC = () => {
  return (
    <CartItemContainer>
      <CartItemList>
        <Input type="checkbox" />
        <ProductInfoContainer>
          <ProductInfoWrapper>
            <ProductImage />
            <ProductDetailInfo>
              <div>Product Title</div>
              <div>Product Price</div>
              <div>택배배송 / 무료배송</div>
            </ProductDetailInfo>
          </ProductInfoWrapper>
        </ProductInfoContainer>
        <QuantitySelect onClick={() => {}} Counter={1} />
        <ProductTotalPrice>
          <Price>30,000</Price>
          <OrderButton>주문하기</OrderButton>
        </ProductTotalPrice>
        <DeleteButton>삭제</DeleteButton>
      </CartItemList>
    </CartItemContainer>
  );
};

export default CartItem;
