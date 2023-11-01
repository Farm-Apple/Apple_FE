import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/Title.svg';
import { signUp } from '../../api/auth/auth';
import ErrorMsg from '../../components/ErrorMsg';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hook/useInput';

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
  width: 42rem;
  padding: 1.8rem;
  gap: 1rem;
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
  const [email, , onChangeEmail] = useInput<string>('');
  const [nickName, , onChangeNickName] = useInput('');
  const [name, , onChangeName] = useInput('');
  const [phoneNumber, , onChangePhoneNumber] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatch, setMismatch] = useState(false);
  const [success, setSuccess] = useState(true);
  const [address, , onChangeAddress] = useInput('');
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!mismatch) {
        const singUpData = await signUp({
          email: email,
          password: password,
          name: name,
          nickname: nickName,
          phone: phoneNumber,
          address: address,
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
    },
    [mismatch, email, password, name, nickName, phoneNumber, address, navigate]
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMismatch(passwordCheck !== e.target.value);
    },
    [passwordCheck, setPassword]
  );

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setMismatch(password !== e.target.value);
    },
    [password, setPasswordCheck]
  );

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
                id='email'
                value={email}
                onChange={onChangeEmail}
                placeholder='ex: Apple@gmail.com'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label htmlFor='password'>
                <span>비밀번호</span>
              </Label>
              <Input
                type='password'
                id='password'
                value={password}
                onChange={onChangePassword}
                placeholder='문자+특수기호(!,@,#) 8자 이상'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label htmlFor='passwordCheck'>
                <span>비밀번호 확인</span>
              </Label>
              <Input
                type='password'
                id='passwordCheck'
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                placeholder='문자+특수기호(!,@,#) 8자 이상'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label htmlFor='name'>
                <span>이름</span>
              </Label>
              <Input
                type='text'
                id='name'
                value={name}
                onChange={onChangeName}
                placeholder='ex: 김사과'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label htmlFor='nickName'>
                <span>닉네임</span>
              </Label>
              <Input
                type='text'
                id='nickName'
                value={nickName}
                onChange={onChangeNickName}
                placeholder='ex: 애플팜'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label htmlFor='phoneNumber'>
                <span>전화번호</span>
              </Label>
              <Input
                type='text'
                id='phoneNumber'
                value={phoneNumber}
                onChange={onChangePhoneNumber}
                placeholder='ex: 01012341234(- 제외)'
                required
              />
            </LabelWrapper>
            <LabelWrapper>
              <Label htmlFor='address'>
                <span>주소</span>
              </Label>
              <Input
                type='text'
                id='address'
                value={address}
                onChange={onChangeAddress}
                placeholder='도로명 주소'
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
