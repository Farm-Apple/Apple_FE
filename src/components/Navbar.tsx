import styled from "styled-components";
import * as React from "react";
import {Link} from "react-router-dom";
import LOGO from "../asset/img/familyFarm_logo2.png"
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const NavBarContainer = styled.nav`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index: 100;
  padding:0 10rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top:1px solid white;
  border-bottom: 1px solid white;
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

const NavBarUl = styled.ul`
  display: flex;
  align-item: center;
  gap: 2rem;
`
const NavBarLi = styled(Link)`
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight:bold;
  vertical-align: middle;
  color: black;
`



const NavBar: React.FC = () => {
    return(
        <>
            <NavBarContainer>
                <NavBarLogo to="/">

                </NavBarLogo>
                <NavBarUl>
                    <NavBarLi to="/Board">농원소개</NavBarLi>
                    <NavBarLi to="/DetailBoard">농원소식</NavBarLi>
                    <NavBarLi to="/Product">쇼핑몰</NavBarLi>
                    <NavBarLi to="/DetailBoard">커뮤니티</NavBarLi>
                </NavBarUl>
                <NavBarUlWrap>
                    <NavBarUl>
                        <NavBarLi to="/ProductOrder"><ShoppingBasketOutlinedIcon sx={{fontSize:"2.4rem"}}/></NavBarLi>
                    </NavBarUl>
                    <NavBarUl>
                        <NavBarLi to="/Login">로그인</NavBarLi>
                        <NavBarLi to="/Join"> 회원가입</NavBarLi>
                    </NavBarUl>
                </NavBarUlWrap>
            </NavBarContainer>
        </>
)
}

export default NavBar