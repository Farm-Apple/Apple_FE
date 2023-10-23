import React from 'react';
import PageLayout from '../../components/PageLayout.tsx';
import Introduction from "./Introduction.tsx";
import ProductType from "./ProductType.tsx";

const HomePage: React.FC = () => {

  return (
    <>
        <PageLayout>
            <Introduction/>
            <ProductType/>
        </PageLayout>
    </>
  );
};

export default HomePage;
