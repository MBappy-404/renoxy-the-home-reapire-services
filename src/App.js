import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Main from './Layout/Main';
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog';
import Services from './components/Home/Services/Services';
import AllServices from './components/AllServices/AllServices';
import ServiceDetails from './components/AllServices/ServiceDetails';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/services'),
        },
        {
          path: '/home',
          element:  <Home></Home>,
          loader: () => fetch('http://localhost:5000/services'),
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path:'/services',
          element: <Services></Services>,
          
        },
        {
          path:'/AllServices',
          element: <AllServices></AllServices>,
          loader: () => fetch('http://localhost:5000/allService')

        },
        {
          path:'/serviceDetails/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/allService/${params.id}`)
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
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
