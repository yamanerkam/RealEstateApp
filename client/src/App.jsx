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
