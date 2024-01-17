import PageLayout from '../../components/PageLayout.tsx';
import Footer from "../../components/Footer.tsx";
import {useEffect, useState} from "react";
import ProductList from "./ProductList.tsx";
export default function ProductPage() {

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
        <PageLayout inScroll={inScroll}>
            <ProductList/>
            <Footer/>
        </PageLayout>
    )
  }
