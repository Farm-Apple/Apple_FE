import styled from "styled-components";
import * as React from "react";
import {Link} from "react-router-dom";
import LOGO from "../asset/img/familyFarm_logo2.jpeg"
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

interface PaddingControl {
    noPadding?: boolean;
}

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
  justify-content: space-between;
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
  display:flex;
  align-items:center;
  gap:2rem;
`

const NavBarUl = styled.ul<PaddingControl>`
  display: flex;
  align-item: center;
  gap: 2rem;
`

const NavBarLi = styled(Link)<PaddingControl>`
  padding: ${(props) => props.noPadding ? "2rem 1rem" : "2rem"};
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.8rem;
  color: black;
  vertical-align: middle;

  &:hover{
    text-decoration: underline;
    box-shadow: inset 2px 2px 10px rgba(255,255,255,.1), inset -5px -8px 8px rgba(0,0,0,.2);
    transition:.2s;
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
                    <NavBarLi to="Board">농원소개</NavBarLi>
                    <NavBarLi to="Product">농원소식</NavBarLi>
                    <NavBarLi to="Product">쇼핑몰</NavBarLi>
                    <NavBarLi to="DetailBoard">커뮤니티</NavBarLi>
                </NavBarUl>
                <NavBarUlWrap>
                    <NavBarUl>
                        <NavBarLi to="ProductOrder"><ShoppingBasketOutlinedIcon sx={{fontSize:"2.4rem"}}/></NavBarLi>
                    </NavBarUl>
                    <NavBarUl noPadding>
                        <NavBarLi to="Login" noPadding>로그인</NavBarLi>
                        <NavBarLi to="Join" noPadding> 회원가입</NavBarLi>
                    </NavBarUl>
                </NavBarUlWrap>
            </NavBarContainer>
        </>
)
}

export default NavBar