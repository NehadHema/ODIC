import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return (
    <>
<Navbar/>
<Outlet/>
{/* <Home/> */}
<Footer/>

    </>
  )
}
