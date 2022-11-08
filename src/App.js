import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Main from './Layout/Main';
import Home from './components/Home/Home'
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element:  <Home></Home>,
        }
      ],
    }
  ])
  return (
    <div>


          <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
