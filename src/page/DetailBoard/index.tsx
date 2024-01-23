import { useEffect } from 'react';
import { getProductDetail } from '@src/api/auth/product';
import appleimg from '@img/main_apple.jpg';
import styled from 'styled-components';
/* Layout */
const Container = styled.div`
  border: 1px solid #000; /* 삭제예정 */
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 3rem 3rem; 
`;
/* 상품 이미지 */
const ProductImgSection = styled.section`
  border: 1px solid red; /* 삭제예정 */
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 80rem;
`;
const ProductImg = styled.figure`
  border: 1px solid green; /* 삭제예정 */
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
  border: 1px solid blue;
  width: 100%;
  max-height: 80rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`;
const ProductName = styled.div`
  border: 2px solid royalblue;
  font-size: 3rem;
  font-weight: 900;
`;
const PriceContainer = styled.div`
  border: 2px solid #000;
`;
const ProductPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  span {
    font-size: 1rem;
    font-weight: 500;
  }
`;
/* 상품 안내 섹션 */
const ProudctDescContainer = styled.div`
  border: 2px solid orange;
  font-size: 1.6rem;
  div {
    border: 2px solid green;
    margin-bottom: 10px;
    &:nth-child(3) {
      margin-bottom: 0;
      display: flex;
      flex-direction: row;
      gap: 10px;
      span {
        font-size: 1rem;
        border: 3px solid #000;
      }
    }
  }
`;
/* 구매상품 상세 선택 섹션 */
const DetailSelectContainer = styled.div`
  border: 2px solid red;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const ProductSelect = styled.div``;
const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* 최종 구매(상품 갯수, 최종금액 확인 후 구매까지) 선택 섹션 */
const FinalProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const FinalQuantity = styled.div``;
const Amount = styled.div``;
const BttonWrapper = styled.div``;
const AdressSurchContainer = styled.div``;

export default function DetailBoardPage() {
  const Detail = async () => {
    const data = await getProductDetail(2);
    console.log(data.data);
    return data;
  };
  useEffect(() => {
    Detail();
  }, []);
  return (
    <Container>
      {/* 상품 이미지 섹션 */}
      <ProductImgSection>
        <h3 className={'hidden'}>상품 이미지 섹션</h3>
        <ProductImg>
          <img src={appleimg} alt='제품1 상세 사진' />
        </ProductImg>
      </ProductImgSection>
      {/* 상품 설명및 구매 섹션 */}
      <ProductDescSection>
        <h3 className={'hidden'}>상품 설명및 구매 섹션</h3>
        <ProductName>선물용 사과 10kg 1box</ProductName>
        <PriceContainer>
          <ProductPrice>
            25,900
            <span>원</span>
          </ProductPrice>
        </PriceContainer>
        <ProudctDescContainer>
          사과 구매시 전달되는 안내 섹션
          <div>
            선택된 상품종 안내와 농장 장점안내 아오리사과는 이러쿵 저러쿵한
            사과로 보무르여르므가으르겨우르 맛이 좋스무니다.
          </div>
          <div>
            저희 농장은 선물용 5kg 단위로 판매하고 있으며......줄임 해당 섹션은
            상품 구성에 대한 내용과 주의할점, 오해하는점, 상품을 받아보는데 까지
            적영
          </div>
          <div>
            <span>택배배송 : 3,000원 / 제주, 도서지역 4,000원</span>
            <span>10만원 이상 구매시 배송비 무료</span>
          </div>
        </ProudctDescContainer>
        <DetailSelectContainer>
          <form>
            <ProductSelect>사과 갯수 선택 +, -</ProductSelect>
            <PurchaseContainer>
              <FinalProductContainer>
                <div>총 상품 금액 : </div>
                <FinalQuantity>선택 된 상품 수량</FinalQuantity>
                <Amount>총 상품 금액 25,900</Amount>
              </FinalProductContainer>
              <AdressSurchContainer>
                <input type='text' placeholder='도로주소'/>
                <input type="text" placeholder='상세주소'/>
                <button type='button'>주소 검색 모달 오픈</button>
              </AdressSurchContainer>
              <BttonWrapper>
                <button type='submit'>구매버튼</button>
                <button type='button'>장바구니 버튼</button>
              </BttonWrapper>
            </PurchaseContainer>
          </form>
        </DetailSelectContainer>
      </ProductDescSection>
    </Container>
  );
}
