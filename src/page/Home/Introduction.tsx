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
  background: url(${mainApple}) no-repeat;
  background-size:cover;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const IntroductionTitle = styled.h2`
  font-size: 5em;
  color: #f39e9e;
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
                    Welcome Family Farm
                </IntroductionTitle>
                <IntroductionButton>Buy Now !</IntroductionButton>
            </IntroductionContainer>
        </>
    )
}

export default Introduction