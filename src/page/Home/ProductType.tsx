import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import {Autoplay, Virtual, Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"

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
  width: 40em;
  padding: 4em 0;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:2em;
  border-radius: 1em;
  border: 1px solid black;
  
`

const ProductTypeTitle = styled.h2`
  font-size: 4em;
  color: #f39e9e;
  text-align: center;
`

const ProductTypeImg = styled.div`
  width:100%;
  height:20em;
  background-color:gray;
`

const ProductTypeDesc = styled.p`
  font-size:1.4em;
`

const ProductTypeButton = styled.button`
  padding:1em 10em;
  margin-top:2em;
  background-color: red;
  color:white;
  border-radius:1em;
  font-size:2em;
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
  padding:5em;
  display:flex;
  align-items:center;
  justify-content:center;
  animation: ${slideIn} 3s ease forwards;
  
  .swiper-button-prev{
    &:after{
      color:red;
      font-size:2em;
    }
  }
  .swiper-button-next{
    &:after{
      color:red;
      font-size:2em;
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
                                slidesPerView={3}
                                virtual
                                navigation
                            >
                                {
                                    [1,2,3,4,5,6,7,8,9,10].map((value: number) => {
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