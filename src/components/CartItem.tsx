import React from "react";
import QuantitySelect from "@common/QuantitySelect";
import styled from "styled-components";

const CartItemContainer = styled.ul``;
const CartItemList = styled.li`
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductInfoContainer = styled.div``;
const ProductInfoWrapper = styled.div``;
const ProductDetailInfo = styled.div``;
const ProductImage = styled.img``;
const ProductTotalPrice = styled.div``;
const Price = styled.div``;

const CartItem: React.FC = () => {
  return (
    <CartItemContainer>
      <CartItemList>
        <input type="checkbox" />
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
          <button>주문하기</button>
        </ProductTotalPrice>
        <button>삭제</button>
      </CartItemList>
    </CartItemContainer>
  );
};

export default CartItem;
