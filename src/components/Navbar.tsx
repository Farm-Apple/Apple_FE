import styled from "styled-components";
import * as React from "react";
import {Link} from "react-router-dom";
import LOGO from "../asset/img/familyFarm_logo2.jpeg"

const NavBarContainer = styled.nav`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index: 100;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 5px -2px #bdbdbd;
  border-radius: 0.5em;
`
const NavBarLogo = styled(Link)`
  margin-left:3em;
  padding-left:3em;
  flex: 0 0 auto;
  font-size: 2em;
  background: url(${LOGO}) no-repeat;
  background-size: contain;
  height:80px;
  width:120px;
  //border:1px solid black;
`

const NavBarUl = styled.ul`
  display: flex;
  flex: 0 0 auto;
  margin: 0 auto;
`

const NavBarLi = styled(Link)`
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.4em;
  color: black;

  &:hover {
    color: white;
    background-color: #bbbbbb;
    text-decoration: underline;
    transition:.3s;
  }
`


const NavBar: React.FC = () => {
    return(
        <>
            <NavBarContainer>
                <NavBarLogo to="/">

                </NavBarLogo>
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