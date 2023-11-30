import React, { useEffect } from "react";
import stratgy from '../../images/services/brandings/stratgy.jpg';
import logo from '../../images/services/brandings/logo.jpg';
import guidelines from '../../images/services/brandings/guidelines.jpg';
import design from '../../images/services/brandings/design.jpg';
import assessment from '../../images/services/brandings/assessment.jpg';

import AOS from "aos";
import "aos/dist/aos.css";
export default function Brand() {
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
            <h1 className='white'>Branding</h1> 
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

      {/* brand_part start */}
      <section class="feature_part pt-3 pb-5 ">
        <div class="container mb-5 pb-5">
          <div class=" align-self-center">
            <div class="single_feature_text  mt-5 p-5">
              <h2 className="color">Branding</h2>
              <p className="text-dark">
              Branding services are dedicated to the development and cultivation of a robust and unified brand identity for businesses or individuals. Branding serves the essential purpose of setting a company or product apart from its competitors, thereby shaping a distinctive perception in the minds of customers. Here are a few typical branding services.
              </p>
            </div>
          </div>

          <section className="feature_part pb-1 ">
  <div className="container mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6 mt-5 pt-5" data-aos="fade-right">
            <h1 className='color'>Logo Design And Visual Identity</h1>
            <p>Crafting an iconic and unforgettable logo that encapsulates the essence and principles of the brand. Building a visual identity encompasses the choice of color schemes, typography, and the creation of templates for marketing collateral, websites, and social media.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-2 mt-2" data-aos="fade-left">
        <img src={logo} alt="" srcset="" className='aboutimage rounded-3' width='90%' />
        </div>
    </div>
  </div>
          </section>

          <section className="feature_part  pt-5 pb-1 ">
      <div className="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6" data-aos="fade-right">
           <img src={stratgy} alt="" srcset="" className='aboutimage rounded' width='90%' height='95%' />
          </div>
    
          <div className="col-lg-6 col-xl-6 mt-5 pt-5" data-aos="fade-left">
          <h1 className='color'>Brand Strategy</h1>
            <p>Formulating an all-encompassing brand strategy that delineates the brand's vision, mission, core values, target demographic, and market positioning. This process entails thorough market research, competitor assessments, and the identification of distinctive value propositions.</p>           
          </div>
        </div>
      </div>
    </section>

    <section className="feature_part pb-1 ">
  <div className="container mt-5 mb-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6 mt-4" data-aos="fade-right">
            <h1 className='color'>Brand Guidelines</h1>
            <p>Crafting a framework of principles that set forth the norms and regulations governing the brand's visual and verbal messaging. These directives guarantee uniformity throughout all interactions with the brand, encompassing logo utilization, typeface selection, imagery, and content tonality.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-2 mt-2" data-aos="fade-left">
           <img src={guidelines} alt="" srcset="" className='aboutimage rounded' width='90%'/>
        </div>
    </div>
  </div>
</section>

<section className="feature_part  mt-4 pt-5 pb-1 ">
      <div className="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6 pt-2 mt-2" data-aos="fade-right">
           <img src={design} alt="" srcset="" className='aboutimage rounded' width='90%'/>
          </div>
    
          <div className="col-lg-6 col-xl-6 mt-5" data-aos="fade-left">
          <h1 className='color'>Brand Website Design</h1>
            <p>Conceiving and constructing a website that mirrors the essence of the brand, communicates core messages effectively, and delivers a user experience that flows effortlessly. This encompasses the creation of an aesthetically pleasing design, integration of brand-specific elements, and optimization for usability and responsiveness.</p>           
          </div>
        </div>
      </div>
    </section>

    <section className="feature_part pb-1 ">
  <div className="container mt-5 mb-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6 mt-5" data-aos="fade-right">
            <h1 className='color'>Brand Assessment and Advisory Services</h1>
            <p>Performing brand assessments to gauge the brand's performance, pinpoint opportunities for enhancement, and offer guidance for fortifying the brand identity and reputation. Brand advisors may also offer insights on brand positioning, market dynamics, and growth strategies.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-2 mt-2" data-aos="fade-left">
           <img src={assessment} alt="" srcset="" className='aboutimage rounded' width='90%' height='100%'/>
        </div>
    </div>
  </div>
</section>





        </div>
      </section>
      {/* brand_part ends */}
    </>
  );
}
