import styled from "styled-components";
import * as React from "react";
import {Link} from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavBarLogo = styled.div`
  margin-right: 40px;
`

const NavBarUl = styled.ul`
  display: flex;
`

const NavBarLi = styled(Link)`
  padding: 20px;
  border-radius: 10px;
  cursor:pointer;
  
  &:hover{
    color: gray;
    background-color: aqua;
    text-decoration: underline;
  }
`


const NavBar: React.FC = () => {
    return(
        <>
            <NavBarContainer>
                <NavBarLogo></NavBarLogo>
                <NavBarUl>
                    {/* Link (react-router-dom) 을 사용할때엔 to 를 반드시 작성해야 컴파일 에러가 없습니다. */}
                    <NavBarLi to="DetailBoard">공지사항</NavBarLi>
                    <NavBarLi to="ProductOrder">상품 주문</NavBarLi>
                </NavBarUl>
            </NavBarContainer>
        </>
)
}

export default NavBar