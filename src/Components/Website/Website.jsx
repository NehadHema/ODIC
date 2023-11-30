import React, { useEffect } from "react";
import web from '../../images/services/website/web.jpg';
import commerce from '../../images/services/website/commerce.jpg';
import tatourial from '../../images/services/website/tatourial.jpg';
import seo from '../../images/services/website/seo.jpg';
import maintance from '../../images/services/website/maintance.jpg';

import AOS from "aos";
import "aos/dist/aos.css";
export default function Website() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* banner_part start */}
      <section class="banner_part">
        <div className="container mt-5 mb-5 pt-5 pb-5">
          <div className="row pt-5">
            <div className="mt-5 pt-5 text-center" data-aos="fade-right">
            <h1 className='white'>Website Development</h1> 
            <p className='white'>Just Say The Word, We Can Do It All!</p>          
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class="sv"
        >
          <path
            fill="rgb(224, 218, 218)"
            fill-opacity="555555.55"
            d="M0,64L40,74.7C80,85,160,107,240,144C320,181,400,235,480,218.7C560,203,640,117,720,96C800,75,880,117,960,138.7C1040,160,1120,160,1200,138.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>
      {/* banner_part ends */}

      {/* website_part start */}
      <section class="feature_part  pt-5 pb-5 ">
        <div class="container mb-5 pb-5">
          <div class=" align-self-center">
            <div class="single_feature_text  mt-5 p-5">
              <h2 className="color">Website Development</h2>
              <p className="text-dark">
                Website development services involve the creation, design, and
                implementation of websites. These services encompass a wide
                range of activities to build and launch functional, visually
                appealing, and user-friendly websites. Here are some common
                website development services.
              </p>
            </div>
          </div>

          <section className="feature_part pb-1 ">
  <div className="container mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6 mt-5 pt-5" data-aos="fade-right">
            <h1 className='color'>Website Design</h1>
            <p>This entails crafting an all-encompassing strategy that delineates the objectives, intended audience, content approach, and the social media platforms to employ for marketing purposes.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-2 mt-2" data-aos="fade-left">
        <img src={web} alt="" srcset="" className='aboutimage rounded-3' width='90%' />
        </div>
    </div>
  </div>
          </section>

          <section className="feature_part  pt-3 pb-1 ">
      <div className="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6 pt-5 mt-5" data-aos="fade-right">
           <img src={commerce} alt="" srcset="" className='aboutimage rounded' width='90%' height='95%' />
          </div>
    
          <div className="col-lg-6 col-xl-6 mt-5 pt-5" data-aos="fade-left">
          <h1 className='color'>E-Commerce Development</h1>
            <p>Constructing digital storefronts and integrating e-commerce capabilities, which encompass tasks such as overseeing product catalogs, facilitating shopping cart functionality, ensuring secure payment gateways, managing inventory, and streamlining order processing. These tasks may leverage platforms like WooCommerce, Magento, Shopify, or tailor-made solutions.</p>           
          </div>
        </div>
      </div>
    </section>

    <section className="feature_part pb-1 ">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6 mt-5" data-aos="fade-right">
            <h1 className='color'>Tailor-Made Web Application Development</h1>
            <p>Crafting customized web applications designed to meet unique business requirements, such as customer portals, inventory management systems, booking systems, or project management tools. This process entails meticulous planning, architectural design, and development to produce resilient and scalable applications.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-2 mt-2" data-aos="fade-left">
           <img src={tatourial} alt="" srcset="" className='aboutimage rounded' width='90%'/>
        </div>
    </div>
  </div>
</section>

<section className="feature_part  mt-4 pt-5 pb-1 ">
      <div className="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6 pt-2 mt-2" data-aos="fade-right">
           <img src={seo} alt="" srcset="" className='aboutimage rounded' width='90%'/>
          </div>
    
          <div className="col-lg-6 col-xl-6 mt-5 pt-5" data-aos="fade-left">
          <h1 className='color'>Website Optimization "SEO"</h1>
            <p>Employing strategies to enhance website performance, which includes enhancing page loading speed, optimizing images and code, incorporating caching mechanisms, and fine-tuning the website's structure to boost search engine visibility (SEO).</p>           
          </div>
        </div>
      </div>
    </section>

    <section className="feature_part pb-1 ">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6 mt-3" data-aos="fade-right">
            <h1 className='color'>Continuous Website Maintenance and Support</h1>
            <p>Delivering consistent support and maintenance solutions to guarantee website functionality, security enhancements, issue resolution, and continual enhancements. This encompasses routine backups, software upgrades, and vigilant monitoring.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-2 mt-2" data-aos="fade-left">
           <img src={maintance} alt="" srcset="" className='aboutimage rounded' width='90%' height='100%'/>
        </div>
    </div>
  </div>
</section>





        </div>
      </section>
      {/* website_part ends */}
    </>
  );
}
