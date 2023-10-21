import { createBrowserRouter } from 'react-router-dom';
import HomePage from './page/Home';
import JoinPage from './page/Join';
import LoginPage from './page/Login';
import OrderCompletePage from './page/OrderComplete';
import ProductPage from './page/Product';
import ProductOrderPage from './page/ProductOrder';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
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
  ]
);

export default router;
