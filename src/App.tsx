import { RouterProvider } from 'react-router-dom';
import GlobalStyled from './style/GlobalStyled'
import router from './Router';

function App() {
  return (
    <>
      <GlobalStyled />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
