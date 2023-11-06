import styled from "styled-components";
import * as React from "react";

const FooterContainer = styled.footer`
  padding:20px;
  display:block;
  background-color:black;
  color:white;
`
const Footer: React.FC = () => {
    return(
        <>
            <FooterContainer>
                Footer 에 들어갈 내용들
            </FooterContainer>
        </>
    )
}

export default Footer