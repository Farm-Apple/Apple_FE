import { createBrowserRouter } from 'react-router-dom';
import HomePage from './page/Home/Home.tsx';
import JoinPage from './page/Join';
import LoginPage from './page/Login';
import OrderCompletePage from './page/OrderComplete';
import ProductPage from './page/Product/Product.tsx';
import ProductOrderPage from './page/ProductOrder';
import DetailBoardPage from "./page/DetailBoard/index.tsx";
import NaverTest from './page/NaverTest/index.tsx';
import PageLayout from "./components/PageLayout.tsx";
import BoardPage from "./page/Board";
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout scrollEventIn/>,
    children: [
      {index: true, element:<HomePage scrollEventIn/>},
      {path:'DetailBoard', element: <DetailBoardPage/>},
      {path: 'OrderComplete', element: <OrderCompletePage/>},
      {path:'Product', element: <ProductPage/>},
      {path: 'ProductOrder', element: <ProductOrderPage />,},
      {path: 'Board', element: <BoardPage />,},
    ],
  },
  // {
  //   path: '/',
  //   element: <HomePage/>,
  // },
  // {
  //   path: 'DetailBoard',
  //   element: <DetailBoardPage/>
  // },
  {
    path: 'Join',
    element: <JoinPage />,
  },
  {
    path: 'Login',
    element: <LoginPage />,
  },
  // {
  //   path: 'OrderComplete',
  //   element: <OrderCompletePage />,
  // },
  // {
  //   path: 'Product',
  //   element: <ProductPage />,
  // },
  // {
  //   path: 'ProductOrder',
  //   element: <ProductOrderPage />,
  // },
  {
    path: 'NaverTest',
    element: <NaverTest />,
  },
],)

export default router;