import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import mainApple from "../../asset/img/main_apple.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {GetProductList} from "../../api/auth/auth.ts";

const ProductTypeContainer = styled.section`
  width:100%;
  padding:10rem;
  display:flex;
  //justify-content:space-around;
  flex-wrap:wrap;
  gap:3rem;
`
const ProductCard = styled(Link)`
  display:flex;
  flex-direction:column;
  min-width:calc(100% / 4 - 3rem);
  color:black;
  gap:1rem;
`
const ProductCardImage = styled.div`
  width:100%;
  height:28rem;
  background:url(${mainApple}) no-repeat center center;
  background-size: cover;
  border-radius:1rem;
  border:none;
  position:relative;
  
  &:hover{
    & > div{
      opacity:1;
    }  
  }
`
const ProductHoverIcon = styled.div`
  background-color:#FFF8E3;
  width:100%;
  height:100%;
  border-radius:1rem;
  opacity:0;
  transition:.3s;
`
const ProductFromTitle = styled.h4`
  font-size:1.6rem;
  color: #767676;
`
const ProductTitle = styled.h4`
  font-size:1.8rem;
  color: black;
`
const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight:bold;
  & > span{
    font-weight:normal;
  }
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
const ProductType: React.FC = () => {

    const [AppleList, setAppleList] = useState<AppleListType[]>([]);

    useEffect(() => {
        GetProductList().then((response) =>
            setAppleList(response)
        )
    },[])


    return(
        <ProductTypeContainer>
            {
                AppleList.map((item) => {
                    return(
                        <ProductCard to="/ProductOrder">
                            <ProductCardImage>
                                <ProductHoverIcon>
                                    <ShoppingCartIcon sx={{width: "100%",fontSize:"6rem",color:"#739072",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}/>
                                </ProductHoverIcon>
                            </ProductCardImage>
                            <ProductFromTitle>
                                {item.detail}
                            </ProductFromTitle>
                            <ProductTitle>
                                {item.product_name}
                            </ProductTitle>
                            <ProductPrice>
                                {item.price.toLocaleString()}<span>원</span>
                            </ProductPrice>
                        </ProductCard>
                    )
                })
            }
        </ProductTypeContainer>
    )
}

export default ProductType