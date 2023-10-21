import React from 'react';
import PageLayout from '../../components/PageLayout.tsx';
import Introduction from "./Introduction.tsx";

const HomePage: React.FC = () => {
  return (
    <>
        <PageLayout>
            <Introduction/>
        </PageLayout>
    </>
  );
};

export default HomePage;
