import React from "react";
import styled, {keyframes} from "styled-components";
import mainApple from "../../asset/img/main_apple.png"
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import {Autoplay, Virtual, Navigation} from "swiper";
import "swiper/swiper-bundle.css"

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px); /* 초기 위치 설정 */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* 최종 위치 설정 */
  }
`;

const CustomSwiper = styled(Swiper)`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;

  .swiper-button-prev{
    &:after {
      color: white;
      font-size:4rem;
      border: 1px solid white;
      padding: 20px 30px;
      margin-left:20px;
    }
  }
  .swiper-button-next{
    &:after {
      color:white;
      font-size:4rem;
      border: 1px solid white;
      padding: 20px 30px;
      margin-right:20px;
    }
  }
`
const CustomSwiperSlide = styled(SwiperSlide)`
  
`

const IntroductionContainer = styled.section`
  height:70vh;
  background: url(${mainApple}) no-repeat;
  background-size:cover;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const IntroductionTitle = styled.h2`
  display:flex;
  flex-direction:column;
  gap:1.5rem;
  font-size: 6.4rem;
  font-weight:800;
  color: white;
  text-align: center;
  animation: ${slideIn} 2s ease forwards;
  
`

const IntroductionButton = styled.button`
  padding:2rem 10rem;
  margin-top:2rem;
  background-color: transparent;
  color:white;
  border: 2px solid white;
  border-radius:4rem;
  font-size:2.4rem;
  cursor:pointer;
  animation: ${slideIn} 2s ease forwards;
  transition: .2s;
  &:hover{
    border: 2px solid red;
    background-color:red;
    color:white;
  }
`


const Introduction: React.FC = () => {

    return(
        <>
            <CustomSwiper
                modules={[Autoplay,Virtual,Navigation]}
                autoplay={{
                    delay:5000,
                }}
                virtual
                navigation
            >
                {
                    ["첫번째", "두번째", "세번째"].map((value:string | number) => {
                        return(
                            <CustomSwiperSlide>
                                <IntroductionContainer>
                                    <IntroductionTitle>
                                        {value} 사과가 맛있는<span>가족농원</span>
                                    </IntroductionTitle>
                                    <IntroductionButton>구매하러 가기</IntroductionButton>
                                </IntroductionContainer>
                            </CustomSwiperSlide>
                        )
                    })
                }
            </CustomSwiper>
        </>
    )
}

export default Introduction