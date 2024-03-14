import React from "react";
import QuantitySelect from "@common/QuantitySelect";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
// import { useCallback } from "react";

const CartItemContainer = styled.ul`
  width: 100%;
`;
const CartItemList = styled.li`
  position: relative;
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const ProductInfoContainer = styled.div``;
const ProductInfoWrapper = styled.div`
  display: flex;
  gap: 3.6rem;
  margin-left: 9rem;
`;
const ProductDetailInfo = styled.div`
  display: flex;
  width: 41.8rem;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
  padding: 1rem 0;
  :nth-child(1) {
    font-size: 1.4rem;
    font-weight: 400;
  }
  :nth-child(2) {
    font-size: 1.8rem;
    font-weight: 400;
  }
  :nth-child(3) {
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 7rem;
  }
`;
const ProductImage = styled.img`
  border: 1px solid #000;
  border-radius: 10%;
  width: 16rem;
  height: 16rem;
`;
const ProductTotalPrice = styled.div`
  width: 13rem;
  margin-right: 5.5rem;
  margin-left: 14.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
`;
const Price = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;
const Input = styled.input`
  position: absolute;
  top: 50%;
  left: 2.8rem;
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  cursor: pointer;
  background-color: transparent;
`;
const OrderButton = styled.button`
  width: 100%;
  height: 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: white;
  background-color: orange;
  cursor: pointer;
`;

const CartItem: React.FC = () => {
  // const handleClickCounter = useCallback(
  //   (number: number) => {
  //     setCounter((prev) => prev + number);
  //     setQuantity((prev) => prev + Product.price * number);
  //   },
  //   [Product.price]
  // );
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
        <DeleteButton>
          <ClearIcon />
        </DeleteButton>
      </CartItemList>
    </CartItemContainer>
  );
};

export default CartItem;
