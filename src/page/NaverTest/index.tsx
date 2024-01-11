import { useEffect } from 'react';
import { NaverLogin } from '../../api/auth/auth';

const NaverTest = () => {
  useEffect(() => {
    const NaverLoginData = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      const state = new URL(window.location.href).searchParams.get('state');
      console.log(code);
      console.log(state);
      const NaverData = await NaverLogin({ code: code, state: state });
      console.log(NaverData);
    };
    NaverLoginData();
  }, []);
  return <div>Naver 회원 데이터 받는중</div>;
};

export default NaverTest;
