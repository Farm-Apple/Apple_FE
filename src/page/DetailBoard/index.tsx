import { useEffect } from 'react';
import { getProductDetail } from '../../api/auth/product';
import appleimg from '@img/main_apple.jpg';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #000; /* 삭제예정 */
  display: flex;
  height: 100vh;
  width: 100vw;
`;
/* 상품 이미지 */
const ProductImgSection = styled.section`
  border: 1px solid red; /* 삭제예정 */
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ProductImg = styled.div`
  border: 1px solid green; /* 삭제예정 */
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
/* 상품 설명 및 구매섹션 */
const ProductDescSection = styled.section`
  border: 1px solid blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProductName = styled.div`
  border: 2px solid royalblue;
`;
const PriceContainer = styled.div`
  border: 2px solid #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ProductPrice = styled.div``;
const PurchaseDesc = styled.div`
  border: 2px solid orange;
`;
const DetailSelectContainer = styled.div`
  border: 2px solid red;
`;

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
      <h2 className='hidden'>상품상세 및 구매 페이지</h2>
      {/* 상품 이미지 섹션 */}
      <ProductImgSection>
        <h3>상품 이미지 섹션</h3>
        <ProductImg>
          <img src={appleimg} alt='제품1 상세 사진' />
        </ProductImg>
      </ProductImgSection>
      {/* 상품 설명및 구매 섹션 */}
      <ProductDescSection>
        <h3>상품 설명및 구매 섹션</h3>
        <ProductName>
          선물용 사과 10kg 1box 놓치지 않을거에요. 원산지: 국산
        </ProductName>
        <PriceContainer>
          <div>할인율: 90%</div>
          <ProductPrice>할인된 가격 : 25,900</ProductPrice>
        </PriceContainer>
        <PurchaseDesc>사과 구매시 전달되는 안내 섹션</PurchaseDesc>
        <DetailSelectContainer>
          <form action=''>
            <label htmlFor=''></label>
            <select name='' id=''>
              사과 10kg
            </select>
            <select name='' id=''>
              사과 5kg
            </select>
          </form>
        </DetailSelectContainer>
      </ProductDescSection>
    </Container>
  );
}
