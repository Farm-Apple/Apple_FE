import React from "react";
import styled, {keyframes} from "styled-components";
import mainApple from "../../asset/img/main_apple.jpg"

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

const IntroductionContainer = styled.section`
  height:100vh;
  background: url(${mainApple});
  background-size:cover;
  background-repeat: no-repeat;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const IntroductionTitle = styled.h2`
  font-size: 4em;
  color: #e14444;
  text-align: center;
  animation: ${slideIn} 2s ease forwards;
`

const IntroductionButton = styled.button`
  padding:1em;
  margin-top:2em;
  background-color: red;
  color:white;
  border-radius:1em;
  font-size:2em;
  border:none;
  cursor:pointer;
  animation: ${slideIn} 2s ease forwards;
  &:hover{
    background-color:red;
    color:black;
  }
`


const Introduction: React.FC = () => {

    return(
        <>
            <IntroductionContainer>
                <IntroductionTitle>
                    우리 농장 사과는 진짜 맛있는데,<br/> 뭐라 설명할 방법이 없네요
                </IntroductionTitle>
                <IntroductionButton>우리농장 사과 사러가기</IntroductionButton>
            </IntroductionContainer>
        </>
    )
}

export default Introduction