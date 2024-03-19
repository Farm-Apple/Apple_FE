import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainApple from '../../assets/images/main_apple.png';

const IntroductionContainer = styled.section`
    padding-top:10rem;
`

const IntroductionCardTitle = styled.h2`
    color:white;
    font-size:10rem;
`;

const IntroductionCard = styled.div`
    width: 100%;
    height: 50vh;
    background: url(${mainApple}) no-repeat center center;
    display: flex !important;
    justify-content: center;
    align-items: center;
`;

const PrevButton = styled.button`
    position: absolute;
    left: 2%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    z-index: 1;
`;

const NextButton = styled.button`
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    z-index: 1;
`;
const Introduction: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevButton />, // 이전 버튼 커스터마이징
        nextArrow: <NextButton />  // 다음 버튼 커스터마이징
    };

    const renderSlides = () =>
        ["하나","둘","셋"].map((num) => (
            <IntroductionCard>
                <IntroductionCardTitle>{num}</IntroductionCardTitle>
            </IntroductionCard>
        ));

    return (
        <IntroductionContainer>
            <Slider {...settings}>
                {renderSlides()}
            </Slider>
        </IntroductionContainer>
    );
};

export default Introduction;