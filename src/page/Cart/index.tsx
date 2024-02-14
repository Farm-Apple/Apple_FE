import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 3rem 3rem;
  margin-top: 100px;
`;
const CartSection = styled.section`
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #000;
`;

const CartPage = () => {
  return (
    <Container>
      <CartSection>
        <Title>장바구니</Title>
      </CartSection>
    </Container>
  );
};

export default CartPage;
