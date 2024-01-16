const NaverLoginBtn = () => {
  const naverState = Math.random(); // 고유한 state값
  const ClientID = import.meta.env.VITE_REACT_NAVER_CLIENT_ID;
  const RedirectUrl = import.meta.env.VITE_REACT_NAVER_REDIRECT_URL;
  console.log(naverState);

  return (
    <>
      <button
        onClick={() => {
          window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${ClientID}&state=${naverState}&redirect_uri=${RedirectUrl}`;
        }}
      >네이버 로그인</button>
    </>
  );
};

export default NaverLoginBtn;
