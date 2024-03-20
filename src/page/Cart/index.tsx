import TotalPrice from "@components/TotalPrice";
import CartItem from "@components/CartItem";
import styled from "styled-components";
import { GetOrderCompleteList } from "@src/api/auth/auth";
import { useCallback, useEffect, useState } from "react";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 3rem 3rem;
  margin-top: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  width: 128rem;
`;
const CartTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  text-align: center;
`;
const ProductInfoTitleContainer = styled.div`
  width: 100%;
  & ul {
    display: grid;
    grid-template-columns: 1fr 1.6fr 1fr 0.55fr;
    width: 100%;
    align-items: center;
    border-radius: 1rem;
    padding: 1.9rem 0 1.8rem 3rem;
    background-color: #e5e5e5;
    li {
      font-size: 1.8rem;
    }
  }
`;
const OrderButton = styled.button`
  width: 22rem;
  padding: 1.9rem 6.5rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
  background-color: orange;
  margin-bottom: 3rem;
  cursor: pointer;
`;
interface Product {
  product_name: string;
  created_at: string;
  detail: null;
  id: number;
  user_id: number;
  product: ProductDetail;
  price: number;
  product_image: null;
  updated_at: string;
  weight: string;
  is_opened: number | undefined;
}
interface ProductDetail {
  product_name: string;
  created_at: string;
  detail: null;
  id: number;
  user_id: number;
  product: ProductDetail;
  price: number;
  product_image: null;
  updated_at: string;
  weight: string;
  is_opened: number | undefined;
}

const CartPage: React.FC = () => {
  const [CartList, setCartList] = useState<Product[]>([]);

  const CartItemList = useCallback(async () => {
    const data = await GetOrderCompleteList();
    setCartList(data);
  }, []);

  useEffect(() => {
    CartItemList();
  }, [CartItemList]);

  return (
    <Container>
      <CartSection>
        <CartTitle>장바구니</CartTitle>
        <ProductInfoTitleContainer>
          <ul>
            <li>
              <label htmlFor="">
                <input type="checkbox" />
              </label>
            </li>
            <li>상품정보</li>
            <li>수량</li>
            <li>상품금액</li>
          </ul>
        </ProductInfoTitleContainer>
        {CartList.length === 0 ? (
          <p>장바구니에 담긴 상품이 없습니다.</p>
        ) : (
          <>
            {CartList.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
            <TotalPrice />
            <OrderButton>주문하기</OrderButton>
          </>
        )}
      </CartSection>
    </Container>
  );
};

export default CartPage;
