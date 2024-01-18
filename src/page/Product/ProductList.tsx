import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {GetProductList} from "../../api/auth/auth.ts";
import mainApple from "../../asset/img/main_apple.jpg"


const ProductListContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: #bdbdbd;
  padding-top: 20rem;
`

const ProductListUl = styled.ul`
  width:100%;
  display:flex;
  justify-content: center;
  padding-bottom: 10rem;
  gap:3rem;
  flex-wrap:wrap;
`

const ProductListLi = styled.li`
  width:30rem;
  height:30rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius: 2rem;
  padding:2rem;
  background-color:white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  cursor:pointer;
`
const ProductListTitle = styled.h3`
  font-size:2.4rem;
  text-align:center;
`

const ProductListImg = styled.div`
  width:25rem;
  height:20rem;
  background:url(${mainApple}) no-repeat center center;
  background-size: contain;
`
interface AppleListType{
    id: number;
    product_name: string;
    price: number;
    weight: string;
    created_at: string;
    updated_at: string;
}

const ProductList:React.FC = () => {

    const [AppleList, setAppleList] = useState<AppleListType[]>([]);

    useEffect(() => {
        GetProductList().then((response) =>
            setAppleList(response)
        )
    },[])

    return (
        <>
            <ProductListContainer>
                <ProductListUl>
                {
                    AppleList.map((item) => {
                        return(
                            <ProductListLi>
                                <ProductListTitle>{item.product_name}</ProductListTitle>
                                <ProductListImg></ProductListImg>
                            </ProductListLi>
                        )
                    })
                }
                </ProductListUl>
            </ProductListContainer>
        </>
    )
}

export default ProductList;
