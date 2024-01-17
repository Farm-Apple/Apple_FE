import React, {ReactNode, useEffect, useState} from 'react';
import PageLayout from '../../components/PageLayout.tsx';
import Introduction from "./Introduction.tsx";
import ProductType from "./ProductType.tsx";
import Footer from "../../components/Footer.tsx";

export interface ParentProps{
    children?: ReactNode,
    inScroll?: number,
}

const HomePage: React.FC<ParentProps> = () => {

    const [inScroll, setInScroll] = useState(0);

    const handleScroll = () => {
        setInScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[inScroll])

    return (
    <>
        <PageLayout inScroll={inScroll}>
            <Introduction/>
            <ProductType/>
            <Footer/>
        </PageLayout>
    </>
  );
};

export default HomePage;