import styled from "styled-components";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../assets/images/familyFarm_logo2.png";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1rem 10rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  box-shadow: 0px 1px 5px -2px #bdbdbd;
  border-radius: 0.5em;
`;

const NavBarLogo = styled(Link)`
  flex: 0 0 auto;
  font-size: 2em;
  background: url(${LOGO}) no-repeat;
  background-size: contain;
  height: 80px;
  width: 120px;
`;

const NavBarUlWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavBarUl = styled.ul`
  display: flex;
  align-items: center;
  /* align-item: ; */
  gap: 2rem;
`;
const NavBarLi = styled(Link)`
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  vertical-align: middle;
  color: black;
`;

const AuthButton = styled.div`
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  vertical-align: middle;
  color: black;
`;

const NavBar: React.FC = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const authHandler = (authType: string) => {
    if (authType === "login") {
      navigate("/Login");
    } else {
      localStorage.clear();
      navigate("/");
    }
  };
  return (
    <>
      <NavBarContainer>
        <NavBarLogo to="/"></NavBarLogo>
        <NavBarUl>
          <NavBarLi to="/Board">농원소개</NavBarLi>
          <NavBarLi to="/DetailBoard">농원소식</NavBarLi>
          <NavBarLi to="/DetailBoard">커뮤니티</NavBarLi>
        </NavBarUl>
        <NavBarUlWrap>
          <NavBarUl>
            <NavBarLi to="/Cart">
              <ShoppingBasketOutlinedIcon sx={{ fontSize: "2.4rem" }} />
            </NavBarLi>
          </NavBarUl>
          <NavBarUl>
            {token ? (
              <AuthButton onClick={() => authHandler("logout")}>
                로그아웃
              </AuthButton>
            ) : (
              <AuthButton onClick={() => authHandler("login")}>
                로그인
              </AuthButton>
            )}
            <NavBarLi to="/Join"> 회원가입</NavBarLi>
          </NavBarUl>
        </NavBarUlWrap>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
