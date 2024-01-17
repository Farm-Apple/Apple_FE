import { createBrowserRouter } from 'react-router-dom';
import HomePage from './page/Home/Home.tsx';
import JoinPage from './page/Join';
import LoginPage from './page/Login';
import OrderCompletePage from './page/OrderComplete';
import ProductPage from './page/Product/Product.tsx';
import ProductOrderPage from './page/ProductOrder';
import DetailBoardPage from "./page/DetailBoard";
import BoardPage from "./page/Board";
import NaverTest from './page/NaverTest/index.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'DetailBoard',
    element: <DetailBoardPage/>
  },
  {
    path: 'Join',
    element: <JoinPage />,
  },
  {
    path: 'Login',
    element: <LoginPage />,
  },
  {
    path: 'OrderComplete',
    element: <OrderCompletePage />,
  },
  {
    path: 'Product',
    element: <ProductPage />,
  },
  {
    path: 'ProductOrder',
    element: <ProductOrderPage />,
  },
],)

export default router;
