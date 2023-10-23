import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(150px); /* 초기 위치 설정 */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* 최종 위치 설정 */
  }
`;

const ProductTypeContainer = styled.section`
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const ProductTypeTitle = styled.h2`
  font-size: 5em;
  color: #f39e9e;
  text-align: center;
  animation: ${slideIn} 3s ease forwards;
`

const ProductTypeButton = styled.button`
  padding:1em;
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


const ProductType: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('productTypeSection');
            if(section){
                const sectionPosition = section.getBoundingClientRect().top;
                if(sectionPosition < window.innerHeight){
                    setIsVisible(true);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return(
        <>
            <ProductTypeContainer id="productTypeSection">
                {
                    isVisible ?
                        <>
                            <ProductTypeTitle>
                                Welcome Family Farm
                            </ProductTypeTitle>
                            <ProductTypeButton>Buy Now !</ProductTypeButton>
                        </>
                        :
                        null
                }
            </ProductTypeContainer>
        </>
    )
}

export default ProductType