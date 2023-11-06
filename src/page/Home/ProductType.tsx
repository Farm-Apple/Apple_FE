import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import {Autoplay, Virtual, Navigation} from "swiper";
import "swiper/swiper-bundle.css"
import applePicture from "../../asset/img/main_apple.jpg"

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(150px); /* 초기 위치 설정 */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* 최종 위치 설정 */
  }
`;

// const slideInLeft = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(-150px); /* 초기 위치 설정 */
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0); /* 최종 위치 설정 */
//   }
// `;


const ProductTypeContainer = styled.section`
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const ProductTypeCard = styled.div`
  width: 40rem;
  padding: 4rem 0;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:2rem;
  border-radius: 1rem;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

const ProductTypeTitle = styled.h2`
  font-size: 4rem;
  color: #f39e9e;
  text-align: center;
`

const ProductTypeImg = styled.div`
  width:100%;
  height:20rem;
  background:url(${applePicture}) no-repeat center center;
  background-size: contain;
`

const ProductTypeDesc = styled.p`
  font-size:1.4rem;
`

const ProductTypeButton = styled.button`
  padding:1rem 10rem;
  margin-top:2rem;
  background-color: red;
  color:white;
  border-radius:1rem;
  font-size:2rem;
  border:none;
  cursor:pointer;
  animation: ${slideIn} 3s ease forwards;
  &:hover{
    background-color:red;
    color:black;
  }
`

const CustomSwiper = styled(Swiper)`
  width:100%;
  padding:5rem;
  display:flex;
  align-items:center;
  justify-content:center;
  animation: ${slideIn} 3s ease forwards;
  
  .swiper-button-prev{
    &:after{
      color:red;
      font-size:2rem;
    }
  }
  .swiper-button-next{
    &:after{
      color:red;
      font-size:2rem;
    }
  }
`

const CustomSwiperSlide = styled(SwiperSlide)`
  
`


const ProductType: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const section = document.getElementById('productTypeSection');
            if (section) {
                const sectionPosition = section.getBoundingClientRect();
                const sectionCenter = sectionPosition.top + sectionPosition.height / 2;
                const windowCenter = window.innerHeight / 2;

                if (Math.abs(sectionCenter - windowCenter) < sectionPosition.height / 2) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 페이지 로드 시 상태 설정
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <ProductTypeContainer id="productTypeSection">
                {
                    isVisible ?
                        <>
                            <CustomSwiper
                                modules={[Autoplay,Virtual,Navigation]}
                                autoplay={{
                                    delay:5000,
                                }}
                                spaceBetween={20}
                                slidesPerView={4}
                                virtual
                                navigation
                            >
                                {
                                    ["부사","아오리","홍로","양광","홍옥","나리따","맛있는","이쁜","준엽","달달한"].map((value: string | number) => {
                                        return(
                                            <CustomSwiperSlide>
                                                <ProductTypeCard>
                                                    <ProductTypeTitle>
                                                        {value + "사과"}
                                                    </ProductTypeTitle>
                                                    <ProductTypeImg></ProductTypeImg>
                                                    <ProductTypeDesc>
                                                        7월 11월엔 00사과 판매
                                                    </ProductTypeDesc>
                                                </ProductTypeCard>
                                            </CustomSwiperSlide>
                                        )
                                    })
                                }
                            </CustomSwiper>
                            <ProductTypeButton>구매하러 가기</ProductTypeButton>
                        </>
                        :
                        null
                }
            </ProductTypeContainer>
        </>
    )
}

export default ProductType