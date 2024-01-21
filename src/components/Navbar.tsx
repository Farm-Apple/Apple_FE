import styled from "styled-components";
import * as React from "react";
import {Link} from "react-router-dom";
import LOGO from "../asset/img/familyFarm_logo2.jpeg"
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

interface ParentProps{
    inScroll: number,
    scrollEventIn: boolean,
}

interface PaddingControl {
    noPadding?: boolean;
    inScroll : number;
    scrollEventIn: boolean,
}


const HomeNavBarContainer = styled.nav<ParentProps>`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index: 100;
  padding:0 10rem;
  background-color: ${props => props.inScroll > 0 && props.scrollEventIn ? "white" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top:1px solid white;
  border-bottom: 1px solid white;
  box-shadow: ${props => props.inScroll > 0 && props.scrollEventIn ? "0px 1px 5px -2px #bdbdbd" : "none"};
  border-radius: 0.5em;
`
const NavBarContainer = styled.nav<ParentProps>`
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

const HomeNavBarLi = styled(Link)<PaddingControl>`
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight:bold;
  vertical-align: middle;
  color: ${props => props.inScroll > 0 && props.scrollEventIn ? "black" : "white"};
`
const NavBarLi = styled(Link)<PaddingControl>`
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight:bold;
  vertical-align: middle;
  color: black;
`



const NavBar: React.FC<ParentProps> = ({inScroll, scrollEventIn}) => {
    return(
        <>
            {scrollEventIn ?
                <HomeNavBarContainer inScroll={inScroll} scrollEventIn={scrollEventIn}>
                    <NavBarLogo to="/">

                    </NavBarLogo>
                    <NavBarUl>
                        {/* Link (react-router-dom) 을 사용할때엔 to 를 반드시 작성해야 컴파일 에러가 없습니다. */}
                        <HomeNavBarLi to="/Board" inScroll={inScroll} scrollEventIn={scrollEventIn}>농원소개</HomeNavBarLi>
                        <HomeNavBarLi to="/Product" inScroll={inScroll} scrollEventIn={scrollEventIn}>농원소식</HomeNavBarLi>
                        <HomeNavBarLi to="/Product" inScroll={inScroll} scrollEventIn={scrollEventIn}>쇼핑몰</HomeNavBarLi>
                        <HomeNavBarLi to="/DetailBoard" inScroll={inScroll} scrollEventIn={scrollEventIn}>커뮤니티</HomeNavBarLi>
                    </NavBarUl>
                    <NavBarUlWrap>
                        <NavBarUl>
                            <HomeNavBarLi to="/ProductOrder" inScroll={inScroll} scrollEventIn={scrollEventIn}><ShoppingBasketOutlinedIcon sx={{fontSize:"2.4rem"}}/></HomeNavBarLi>
                        </NavBarUl>
                        <NavBarUl>
                            <HomeNavBarLi to="/Login" noPadding inScroll={inScroll} scrollEventIn={scrollEventIn}>로그인</HomeNavBarLi>
                            <HomeNavBarLi to="/Join" noPadding inScroll={inScroll} scrollEventIn={scrollEventIn}> 회원가입</HomeNavBarLi>
                        </NavBarUl>
                    </NavBarUlWrap>
                </HomeNavBarContainer>
            :
            <NavBarContainer inScroll={inScroll} scrollEventIn={scrollEventIn}>
                <NavBarLogo to="/">

                </NavBarLogo>
                <NavBarUl>
                    {/* Link (react-router-dom) 을 사용할때엔 to 를 반드시 작성해야 컴파일 에러가 없습니다. */}
                    <NavBarLi to="/Board" inScroll={inScroll} scrollEventIn={scrollEventIn}>농원소개</NavBarLi>
                    <NavBarLi to="/Product" inScroll={inScroll} scrollEventIn={scrollEventIn}>농원소식</NavBarLi>
                    <NavBarLi to="/Product" inScroll={inScroll} scrollEventIn={scrollEventIn}>쇼핑몰</NavBarLi>
                    <NavBarLi to="/DetailBoard" inScroll={inScroll} scrollEventIn={scrollEventIn}>커뮤니티</NavBarLi>
                </NavBarUl>
                <NavBarUlWrap>
                    <NavBarUl>
                        <NavBarLi to="/ProductOrder" inScroll={inScroll} scrollEventIn={scrollEventIn}><ShoppingBasketOutlinedIcon sx={{fontSize:"2.4rem"}}/></NavBarLi>
                    </NavBarUl>
                    <NavBarUl>
                        <NavBarLi to="/Login" noPadding inScroll={inScroll} scrollEventIn={scrollEventIn}>로그인</NavBarLi>
                        <NavBarLi to="/Join" noPadding inScroll={inScroll} scrollEventIn={scrollEventIn}> 회원가입</NavBarLi>
                    </NavBarUl>
                </NavBarUlWrap>
            </NavBarContainer>
            }
        </>
)
}

export default NavBar