import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import { Children } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contactus from './Components/Contactus/Contactus';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout/> , children:[
        { path:"/home",element: <Home/>},
        { path:"/about",element: <About/> },
        { path:"/services",element:<Services/> },
        { path:"/contactus",element: <Contactus/>}

      ]

      
    }
  ]);
  
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
  </>
  );
}

export default App;
