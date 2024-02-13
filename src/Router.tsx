import { createBrowserRouter } from 'react-router-dom';
import HomePage from './page/Home/Home';
import JoinPage from './page/Join';
import LoginPage from './page/Login';
import OrderCompletePage from './page/OrderComplete';
import ProductOrderPage from './page/ProductOrder';
import DetailBoardPage from './page/DetailBoard/index';
import NaverTest from './page/NaverTest/index';
import PageLayout from './components/PageLayout';
import BoardPage from './page/Board';
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout scrollEventIn />,
    children: [
      { index: true, element: <HomePage scrollEventIn /> },
      { path: 'DetailBoard', element: <DetailBoardPage /> },
      { path: 'OrderComplete', element: <OrderCompletePage /> },
      { path: 'ProductOrder/:id', element: <ProductOrderPage /> },
      { path: 'Board', element: <BoardPage /> },
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
]);

export default router;
