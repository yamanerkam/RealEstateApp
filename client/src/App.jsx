import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Routes/HomePage/HomePage'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import ListPage from './Routes/ListPage/ListPage';
import SinglePage from './Routes/SinglePage/SinglePage';
import LoginPage from './Routes/LoginPage/LoginPage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <HomePage />
      ,
    },
    {
      path: "/list",
      element: <ListPage />,
    },
    {
      path: "/single-page",
      element: <SinglePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
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
