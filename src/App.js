import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import { Children } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Contactus from './Components/Contactus/Contactus';
import Website from './Components/Website/Website';
import Seo from './Components/Seo/Seo';
import Brand from './Components/Brandings/Brand';
import Social from './Components/Social/Social';
import Mobile from './Components/Mobile/Mobile';
import SeoDetails from './Components/Seo/SeoDetails';
import Marketing from './Components/Social/Marketing';
import Graphics from './Components/Website/Graphics';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout/> , children:[
        { path:"/",element: <Home/>},
        { path:"/home",element: <Home/>},
        { path:"/about",element: <About/> },
        {path:"/works",element:<Portfolio/>},
        { path:"/services",element:<Services/> },
        { path:"/contactus",element: <Contactus/>},
        {path:"/services/website",element:<Website/>},
        {path:"/services/seo",element:<Seo/>},
        {path:"/services/seo/seodetails",element:<SeoDetails/>},
        {path:"/services/brand",element: <Brand/>},
        {path:"/services/brand/graphics",element:<Graphics/>},
        {path:"/services/social", element:<Social/>},
        {path:"/services/seo/marketing",element:<Marketing/>},
        {path:"/services/mobile",element:<Mobile/>},

        

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
