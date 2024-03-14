import React from "react";
import styled from "styled-components";

const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 42px 90px 46px 112px;
  background-color: #f2f2f2;
  border-radius: 12px;
`;
const PirceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;
const PriceTitle = styled.p`
  font-size: 16px;
  grid-row: 400;
`;
const ResultProice = styled.p`
  font-size: 24px;
  font-weight: 700;
  span {
    font-size: 16px;
    font-weight: 400;
  }
`;
const FinalTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
const FinalPrice = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: orange;
  span {
    font-size: 18px;
    font-weight: 400;
  }
`;

const TotalPrice: React.FC = () => {
  return (
    <TotalPriceContainer>
      <PirceWrapper>
        <PriceTitle>총 상품금액</PriceTitle>
        <ResultProice>
          30,000
          <span> 원</span>
        </ResultProice>
      </PirceWrapper>
      <div>-</div>
      <PirceWrapper>
        <PriceTitle>상품 할인</PriceTitle>
        <ResultProice>
          30,000
          <span> 원</span>
        </ResultProice>
      </PirceWrapper>
      <div>+</div>
      <PirceWrapper>
        <PriceTitle>배송비</PriceTitle>
        <ResultProice>
          3,000
          <span> 원</span>
        </ResultProice>
      </PirceWrapper>
      <PirceWrapper>
        <FinalTitle>총 상품금액</FinalTitle>
        <FinalPrice>
          30,000
          <span> 원</span>
        </FinalPrice>
      </PirceWrapper>
    </TotalPriceContainer>
  );
};
export default TotalPrice;
