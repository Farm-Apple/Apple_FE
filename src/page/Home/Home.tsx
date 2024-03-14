import React from 'react';
import Introduction from "./Introduction.tsx";
import ProductType from "./ProductType.tsx";
import Footer from "../../components/Footer.tsx";
import {ParentProps} from "../../components/PageLayout.tsx";

const HomePage: React.FC<ParentProps> = () => {

    return (
    <>
        <Introduction/>
        <ProductType/>
        <Footer/>
    </>
  );
};

export default HomePage;