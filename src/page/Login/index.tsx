import styled from "styled-components";
import logo from "../../assets/images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hook/useInput";
import { useCallback } from "react";
import { GetOrderCompleteList, Login } from "../../api/auth/auth";
import NavBar from "../../components/Navbar";
// import NaverLoginBtn from "../../components/NaverLoginBtn";

const LoginContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80rem;
  margin: auto;
  img {
    max-height: 18rem;
    margin-bottom: 3rem;
  }
`;
const LoginForm = styled.form`
  width: 52rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
`;
const IdPwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1.8rem;
`;
const IdWrapper = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
`;
const JoinWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin: 1.5rem 0;
`;

const Label = styled.label`
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 0.8rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #ee6363;
  }
`;
const Input = styled.input`
  width: 100%;
  border-style: none;
  font-size: 2rem;
  height: 4rem;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 1.6rem 0 1.6rem 0;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 1rem;
  font-weight: 600;
`;

function LoginPage() {
  const [email, , onChangeEmail] = useInput("");
  const [password, , onChangePassword] = useInput("");
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const loginData = await Login({
        email: email,
        password: password,
      });
      console.log(loginData.data.accessToken);
      localStorage.setItem("token", loginData.data.accessToken);
      navigate("/");

      const orderListData = await GetOrderCompleteList(loginData.data.user.id);
      console.log(orderListData);
    },
    [email, password, navigate]
  );

  return (
    <>
      <NavBar />
      <LoginContainer>
        <header>
          <img src={logo} alt="로고이미지" />
        </header>
        <section>
          <h2 className="hidden">로그인 섹션</h2>
          <LoginForm onSubmit={onSubmit}>
            <IdPwWrapper>
              <IdWrapper>
                <Label htmlFor="email"></Label>
                <Input
                  type="email"
                  id="id"
                  value={email}
                  onChange={onChangeEmail}
                  placeholder="아이디를 입력하세요"
                  required
                />
              </IdWrapper>
              <IdWrapper>
                <Label htmlFor="password"></Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={onChangePassword}
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </IdWrapper>
            </IdPwWrapper>
            <JoinWrapper>
              애플팜 회원이 아니시라면? <Link to="/join">간편 회원가입</Link>
            </JoinWrapper>
            <Button type="submit">로그인</Button>
          </LoginForm>
          {/* <NaverLoginBtn /> */}
        </section>
      </LoginContainer>
    </>
  );
}
export default LoginPage;
