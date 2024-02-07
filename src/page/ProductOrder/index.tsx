import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProductDetail } from '@src/api/auth/product';
import appleimg from '@img/main_apple.jpg';
import QuantitySelect from '@common/QuantitySelect.tsx';

interface ProductProps {
  id: number;
  product_name: string;
  price: number;
  weight: string;
  created_at: Date;
  updated_at: Date;
}

/* Layout */
const Container = styled.div`
  border: 1px solid #000; /* 삭제예정 */
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 3rem 3rem;
  margin-top: 100px;
`;
/* 상품 이미지 */
const ProductImgSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 80rem;
`;
const ProductImg = styled.figure`
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
/* 상품 설명 및 구매 섹션 */
const ProductDescSection = styled.section`
  width: 100%;
  max-height: 80rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1rem;
`;
const ProductName = styled.div`
  font-size: 3.6rem;
  font-weight: 400;
`;
const PriceContainer = styled.div``;
const ProductPrice = styled.div`
  font-size: 3.6rem;
  font-weight: 700;
  span {
    font-size: 1.8rem;
    font-weight: 400;
  }
`;
/* 상품 안내 섹션 */
const ProudctDescContainer = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  div {
    margin-bottom: 3rem;
    &:nth-child(3) {
      margin-bottom: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      span {
        font-size: 1.4rem;
        font-weight: 400;
        color: #767676;
      }
    }
  }
`;
/* 구매상품 상세 선택 섹션 */
const DetailSelectContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* 최종 구매(상품 갯수, 최종금액 확인 후 구매까지) 선택 섹션 */
const FinalProductContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalPriceText = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.8;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FinalQuantity = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  &::after {
    content: '';
    margin: auto 12px auto 11px;
    display: inline-block;
    height: 18px;
    width: 1px;
    background-color: #000;
    vertical-align: middle;
  }
  span {
    font-weight: 700;
    color: orange;
    padding: 0.2rem;
  }
`;
const Amount = styled.p`
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  line-height: 3rem;
  span {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.3rem;
    color: orange;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: rgba(196, 196, 196, 1);
`;

const BttonWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const OrderButton = styled.button`
  font-size: 1.8rem;
  font-weight: 700;
  background-color: orange;
  width: 70%;
  height: 6rem;
  color: rgba(255, 255, 255, 1);
  border-radius: 4px;
`;
const BasketButton = styled.button`
  font-size: 1.8rem;
  font-weight: 700;
  background-color: orange;
  width: 30%;
  height: 6rem;
  color: rgba(255, 255, 255, 1);
  border-radius: 4px;
`;

export default function ProductOrderPage() {
  const [Product, setProduct] = useState<ProductProps>({
    id: 0,
    product_name: '',
    price: 0,
    weight: '',
    created_at: new Date(),
    updated_at: new Date(),
  });
  const [Counter, setCounter] = useState<number>(1);
  const [Quantity, setQuantity] = useState<number>(Product.price);
  const { id: pathId } = useParams();

  const Detail = useCallback(async () => {
    const data = await getProductDetail(pathId);
    setProduct(data);
    setQuantity(data.price)
  }, [pathId]);

  useEffect(() => {
    Detail();
  }, [Detail]);

  const handleClickCounter = useCallback(
    (number: number) => {
      setCounter((prev) => prev + number);
      setQuantity((prev) => prev + Product.price * number);
    },
    [Product.price]
  );

  return (
    <Container>
      {/* 상품 이미지 섹션 */}
      {Product.price !== 0 ? (
        <>
          <ProductImgSection>
            <h3 className={'hidden'}>상품 이미지 섹션</h3>
            <ProductImg>
              <img src={appleimg} alt='제품1 상세 사진' />
            </ProductImg>
          </ProductImgSection>
          {/* 상품 설명및 구매 섹션 */}
          <ProductDescSection>
            <h3 className={'hidden'}>상품 설명및 구매 섹션</h3>
            <ProductName>{Product.product_name}</ProductName>
            <PriceContainer>
              <ProductPrice>
                {Product.price.toLocaleString()}
                <span>원</span>
              </ProductPrice>
            </PriceContainer>
            <ProudctDescContainer>
              <div>
                선택된 상품종 안내와 농장 장점안내 아오리사과는 이러쿵 저러쿵한
                사과로 보무르여르므가으르겨우르 맛이 좋스무니다.
              </div>
              <div>
                저희 농장은 선물용 5kg 단위로 판매하고 있습니다. 해당 섹션은
                상품 구성에 대한 내용과 주의할점, 오해하는점, 상품을 받는데
                걸리는 시간
              </div>
              <div>
                <span>택배배송 : 3,000원 / 제주, 도서지역 4,000원</span>
                <span>10만원 이상 구매시 배송비 무료</span>
              </div>
            </ProudctDescContainer>
            <DetailSelectContainer>
              <form>
                {/* 상품 수량 선택 컴포넌트 */}
                <Line />
                <QuantitySelect
                  Counter={Counter}
                  onClick={handleClickCounter}
                />
                <Line />
                {/* 상품 구매 정보 */}
                <PurchaseContainer>
                  {/* 총 상품 금액 */}
                  <FinalProductContainer>
                    <TotalPriceText>총 상품 금액</TotalPriceText>
                    <Wrapper>
                      <FinalQuantity>
                        총 수량 <span>{Counter}</span>개
                      </FinalQuantity>
                      <Amount>
                        {Quantity.toLocaleString()}
                        <span>원</span>
                      </Amount>
                    </Wrapper>
                  </FinalProductContainer>
                  {/* 구매 및 장바구니 버튼 */}
                  <BttonWrapper>
                    <OrderButton type='submit'>구매버튼</OrderButton>
                    <BasketButton type='button'>장바구니 버튼</BasketButton>
                  </BttonWrapper>
                </PurchaseContainer>
              </form>
            </DetailSelectContainer>
          </ProductDescSection>
        </>
      ) : (
        <div>Loading...</div>
      )}
      ;
    </Container>
  );
}
