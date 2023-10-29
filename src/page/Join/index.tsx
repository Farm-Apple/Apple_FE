import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/Title.svg'
import { signUp } from '../../api/auth/auth';
import ErrorMsg from '../../components/common/ErrorMsg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 0.5rem;
  background-color: #fbfbfb;
  width: 420px;
  padding: 1.8rem;
  gap: 10px;
`;
const LabelWrapper = styled.div`
  margin-bottom: 1.6rem;
  margin-left: 0.4rem;
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
  height: 4rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  padding: 1.2rem;
  line-height: 1.333333;

  &:valid {
    background-color: #f4c6c6;
  }
  &:focus {
    background-color: #f4c6c6;
    border: 3px solid #d5d5d5;
  }
`;

const Button = styled.button`
width: 100%;
height: 3.5rem;
font-size: 1.8rem;
color: #fff;
background-color: #088804;
border: 1px solid #088804;
border-radius: 0.5rem;
`;

export default function JoinPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatch, setMismatch] = useState(false);
  const [success, setSuccess] = useState(true);
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  // const [address, setAddress] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mismatch) {
      const singUpData = await signUp({
        email: email,
        password: password,
        name: name,
        nickname: nickName,
        phone: phoneNumber,
      });
      console.log(singUpData);
      if (singUpData.data.message === '이미 가입한 회원입니다.') {
        console.log('이미 가입한 아이디 입니다.');
        setSuccess(false);
      } else {
        console.log('가입에 성공했습니다.');
        navigate('/login');
        setSuccess(false);
      }
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setMismatch(passwordCheck !== e.target.value);
  };
  const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    setMismatch(password !== e.target.value);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  // const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAddress(e.target.value);
  // };
  return (
    <>
      <Container>
        <header>
          <img src={Logo} alt='로고이미지' />
        </header>
        <section>
          <h2 className='hidden'>회원가입 폼</h2>
          <FormLayout onSubmit={onSubmit}>
            <LabelWrapper>
              <Label htmlFor='email'>
                <span>이메일 주소</span>
              </Label>
              <Input
                type='email'
                id={email}
                value={email}
                onChange={onChangeEmail}
                placeholder='ex: Apple@gmail.com'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label>
                <span>비밀번호</span>
              </Label>
              <Input
                type='password'
                value={password}
                onChange={onChangePassword}
                placeholder='문자+특수기호(!,@,#) 8자 이상'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label>
                <span>비밀번호 확인</span>
              </Label>
              <Input
                type='password'
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                placeholder='문자+특수기호(!,@,#) 8자 이상'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label>
                <span>이름</span>
              </Label>
              <Input
                type='text'
                value={name}
                onChange={onChangeName}
                placeholder='ex: 김사과'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label>
                <span>닉네임</span>
              </Label>
              <Input
                type='text'
                value={nickName}
                onChange={onChangeNickName}
                placeholder='ex: 애플팜'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label>
                <span>전화번호</span>
              </Label>
              <Input
                type='text'
                value={phoneNumber}
                onChange={onChangePhoneNumber}
                placeholder='ex: 01012341234(- 제외)'
                required
              />
            </LabelWrapper>
            <Button type='submit'>회원가입</Button>
            {!success && <ErrorMsg msg={'중복된 이메일 입니다.'} />}
            {mismatch && <ErrorMsg msg={'비밀번호가 다릅니다.'} />}
          </FormLayout>
        </section>
      </Container>
    </>
  );
}
