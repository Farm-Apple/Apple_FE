import styled from 'styled-components';
import Logo from '../../assets/images/Title.svg';
import { Link } from 'react-router-dom';

const LoginContainer = styled.section`
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  border-radius: 10px;
  width: 100%;
  margin-bottom: 1.8rem;
`;
const IdWrapper = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 1.8rem;
  width: 100%;
`;
const JoinWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border-style: none;
  font-size: 2rem;
`;
const Button = styled.button`
  width: 100%;
  padding: 1.6rem 0 1.6rem 0;
  font-size: 2rem;
`;

function LoginPage() {
  return (
    <>
      <LoginContainer>
        <header>
          <img src={Logo} alt='로고이미지' />
        </header>
        <section>
          <h2 className='hidden'>로그인 섹션</h2>
          <LoginForm>
            <IdPwWrapper>
              <IdWrapper>
                <label>
                  <Input type='text' placeholder='아이디를 입력하세요' />
                </label>
              </IdWrapper>
              <IdWrapper>
                <label>
                  <Input type='password' placeholder='비밀번호를 입력하세요' />
                </label>
              </IdWrapper>
            </IdPwWrapper>
            <JoinWrapper>
              애플팜 회원이 아니시라면? <Link to=''>간편 회원가입</Link>
            </JoinWrapper>
            <Button>로그인</Button>
          </LoginForm>
          <ButtonWrapper>
            <Button>네이버 로그인</Button>
          </ButtonWrapper>
        </section>
      </LoginContainer>
    </>
  );
}
export default LoginPage;
