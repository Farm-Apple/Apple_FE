import { createBrowserRouter } from 'react-router-dom';
import HomePage from './page/Home/index.tsx';
import JoinPage from './page/Join';
import LoginPage from './page/Login';
import OrderCompletePage from './page/OrderComplete';
import ProductPage from './page/Product';
import ProductOrderPage from './page/ProductOrder';
import DetailBoardPage from "./page/DetailBoard";
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
