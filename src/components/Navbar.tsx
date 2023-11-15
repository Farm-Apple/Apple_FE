import styled from "styled-components";
import * as React from "react";
import {Link} from "react-router-dom";
import LOGO from "../asset/img/familyFarm_logo2.jpeg"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const NavBarContainer = styled.nav`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index: 100;
  padding:0 10rem;
  background-color:white;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 5px -2px #bdbdbd;
  border-radius: 0.5em;
`
const NavBarLogo = styled(Link)`
  flex: 0 0 auto;
  font-size: 2em;
  background: url(${LOGO}) no-repeat;
  background-size: contain;
  height:80px;
  width:120px;
`

const NavBarUlWrap = styled.div`
  width:100%;
  display:flex;
  justify-content: space-around;
`

const NavBarUl = styled.ul`
  display: flex;
  flex: 0 0 auto;
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
                <NavBarUlWrap>
                    <NavBarUl>
                        {/* Link (react-router-dom) 을 사용할때엔 to 를 반드시 작성해야 컴파일 에러가 없습니다. */}
                        <NavBarLi to="Board">농원소개</NavBarLi>
                        <NavBarLi to="Product">농원소식</NavBarLi>
                        <NavBarLi to="ProductOrder">쇼핑몰</NavBarLi>
                        <NavBarLi to="DetailBoard">커뮤니티</NavBarLi>
                    </NavBarUl>
                    <NavBarUl>
                        <NavBarLi to="Login"><ShoppingBasketIcon/></NavBarLi>
                    </NavBarUl>
                </NavBarUlWrap>
            </NavBarContainer>
        </>
)
}

export default NavBar