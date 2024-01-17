import React from "react";
import styled from "styled-components";


const ProductListContainer = styled.section`
  display:flex;
  justify-content:center;
  background-color: pink;
  padding-top:20rem;
`

const ProductListUl = styled.ul`
  width:100%;
  display:flex;
  gap:3rem;
`

const ProductListLi = styled.li`
  border:1px solid black;
  border-radius: 2rem;
  padding:2rem;
`

const ProductList:React.FC = () => {

    return (
        <>
            <ProductListContainer>
                <ProductListUl>
                {
                    ["부사","아오리","홍로","양광","홍옥","나리따","맛있는","이쁜","준엽","달달한"].map((item) => {
                        return(
                            <ProductListLi>
                                {item}
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
