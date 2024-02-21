import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 1.6rem 0 1.6rem 0;
  font-size: 2rem;
`;

const NaverLoginBtn = () => {
  const naverState = Math.random(); // 고유한 state값
  const ClientID = import.meta.env.VITE_REACT_NAVER_CLIENT_ID;
  const RedirectUrl = import.meta.env.VITE_REACT_NAVER_REDIRECT_URL;
  console.log(naverState);

  
  return (
    <>
      <Button
        onClick={() => {
          window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${ClientID}&state=${naverState}&redirect_uri=${RedirectUrl}`;
        }}
      >네이버 로그인</Button>
    </>
  );
};

export default NaverLoginBtn;
