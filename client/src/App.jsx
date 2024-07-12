import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Routes/HomePage/HomePage'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import ListPage from './Routes/ListPage/ListPage';
import SinglePage from './Routes/SinglePage/SinglePage';
import LoginPage from './Routes/LoginPage/LoginPage';
import ProfilePage from './Routes/ProfilePage/ProfilePage';
import Register from './Routes/RegisterPage/Register';
import PublicRoute from './RouterProtection/PublicRoute';
import PrivateRoute from './RouterProtection/PrivateRoute';
import UpdatePage from './Routes/UpdatePage/UpdatePage';
import NewPostPage from './Routes/NewPostPage/NewPostPage';
import { singlePageLoader } from './Lib/loaders';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/list",
      element: <ListPage />,
    },
    {
      path: "/listing/:id",
      element: <SinglePage />,
      loader: singlePageLoader
    },
    {
      element: <PublicRoute />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      element: <PrivateRoute />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: '/update',
          element: <UpdatePage />
        }, {
          path: '/new-post',
          element: <NewPostPage />
        }
      ],
    },









  ]);
  return (
    <div className='app' >

      <Navbar />
      <RouterProvider router={router} />

    </div>
  )
}

export default App
