import React, {ReactNode} from 'react';
import PageLayout from '../../components/PageLayout.tsx';
import Introduction from "./Introduction.tsx";
import ProductType from "./ProductType.tsx";
import Footer from "../../components/Footer.tsx";

export interface ParentProps{
    children: ReactNode,
}

const HomePage: React.FC = () => {

    return (
    <>
        <PageLayout>
            <Introduction/>
            <ProductType/>
            <Footer/>
        </PageLayout>
    </>
  );
};

export default HomePage;