import styled from "styled-components";
import * as React from "react";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 10rem;
  gap: 1rem;
  padding: 1rem 4rem;
  border-top: 1px solid #e4ebf0;
  color: #81898f;
  font-size: 12px;
  font-weight: 400;
  line-height: 30px;
`;
const PolicyArea = styled.div`
  display: flex;
  gap: 1.25rem;
  span {
    cursor: pointer;
  }
`;

const TextArea = styled.div`
  span:nth-child(n + 2) {
    position: relative;
    margin-left: 0.625rem;
    padding-left: 0.625rem;
  }
  span:nth-child(n + 2)::after {
    content: "";
    position: absolute;
    left: 0;
    top: 3px;
    width: 1px;
    height: 12px;
    background-color: #81898f;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <PolicyArea>
        <span>개인정보처리방침</span>
        <span>서비스 이용약관</span>
      </PolicyArea>

      <TextArea>
        <span>영주부석아래 가족농원(주)</span>
        <span>대표자: 장두영</span>
        <span>사업자 등록번호: 113-92-01391</span>
        <span>통신판매업 신고번호: 2022-경북영주-0097</span>
        <div>
          <span>주소: 경상북도 영주시 부석면 봉황산로78번길 10-1</span>
          <span>전화: 010-6215-1060</span>
        </div>
      </TextArea>
    </FooterContainer>
  );
};

export default Footer;
