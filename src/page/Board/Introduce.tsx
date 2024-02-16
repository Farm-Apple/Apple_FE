import React from "react";
import styled from "styled-components";

const IntroduceTitle = styled.h2`
  color:pink;
`

const Introduce:React.FC = () => {
    return(
        <IntroduceTitle>
            안녕하세요
        </IntroduceTitle>
    )
}

export default Introduce;