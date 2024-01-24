import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {GetProductList} from "../../api/auth/auth.ts";
import mainApple from "../../asset/img/main_apple.jpg"
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ProductListContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: white;
  padding-top: 20rem;
`

const ProductListUl = styled.ul`
  width:100%;
  display:flex;
  justify-content: center;
  padding-bottom: 10rem;
  gap:7rem 3rem;
  flex-wrap:wrap;
`

const ProductListLi = styled(Link)`
  width: calc(100% / 4 - 9rem);
  display:flex;
  position:relative;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  border-radius: 2rem;
  padding:2rem 7rem;
  background-color:white;
  //box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  cursor:pointer;
  color:black;
  &:hover {
    & > div{
      //transform:scaleX(-1);
      opacity:0.2;
    }
    & .MuiSvgIcon-root{
      opacity:1;
    }
  }
`
const ProductListImg = styled.div`
  width:25rem;
  height:25rem;
  align-self:center;
  background:url(${mainApple}) no-repeat center center;
  background-size: cover;
  border-radius:1rem;
  transition:.3s;
  overflow:hidden;
  margin-bottom:2rem;
`

const ProductListTitle = styled.h3`
  font-size:2rem;
  text-align:center;
  font-weight: normal;
  margin-bottom:.5rem;
`
const ProductListPrice = styled.h4`
  font-size:2.6rem;
`

const ProductHashTag = styled.h5`
  padding:.3rem 1rem;
  background-color:#FFBB64;
  border-radius:2rem;
  font-size:1.2rem;
  margin-bottom:1rem;
`
const ProductHasTagNone = styled.div`
  padding: .3rem 1rem;
  margin-bottom:1rem;
`
interface AppleListType{
    id: number;
    product_name: string;
    price: number;
    detail: string;
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
                            <ProductListLi to="/ProductOrder" key={item.id}>
                                <ProductListImg></ProductListImg>
                                <ShoppingCartIcon sx={{fontSize:"6rem",color:"#739072",position:"absolute",top:"30%",left:"50%",transform:"translateX(-50%)",opacity:"0",transition:"0.3s"}}/>
                                {
                                    item.detail ?
                                        <ProductHashTag>#{item.detail}</ProductHashTag>
                                        :
                                        <ProductHasTagNone></ProductHasTagNone>
                                }

                                <ProductListTitle>{item.product_name}</ProductListTitle>
                                <ProductListPrice>{item.price.toLocaleString()}원</ProductListPrice>
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
