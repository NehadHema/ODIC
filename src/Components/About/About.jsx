import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import about from '../../images/home/about.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
     {/* banner_part start */}
<section class="banner_part">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="mt-5 pt-5 text-center" data-aos="fade-right">
            <h1>About US</h1>           
        </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="sv">
        <path fill="rgb(224, 218, 218)" fill-opacity="555555.55"
          d="M0,64L40,74.7C80,85,160,107,240,144C320,181,400,235,480,218.7C560,203,640,117,720,96C800,75,880,117,960,138.7C1040,160,1120,160,1200,138.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
</section>
 {/* banner_part ends */}


 {/* about_part start */}
    <section class="feature_part  pt-5 pb-5 ">
      <div class="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6" data-aos="fade-right">
           <img src={about} alt="" srcset="" className='aboutimage' width='90%'/>
          </div>
    
          <div className="col-lg-6 col-xl-6" data-aos="fade-left">
            <p>The ORIGINAL GOAL™ team is honored to provide its valued customers with its services in the field of building applications and websites, as the team offers a unique and distinctive experience through a combination of creativity and high quality of work, thanks to its credibility and good reputation in this field. We are a leading company in Egypt in the field of building websites and applications And the work of advertising campaigns, and we also provide many electronic services that help companies and individuals to solve their problems and improve the level of service they provide. Through our extensive experience and modern technologies, we promise our customers to meet all their needs in the best possible way, and at an appropriate cost for all budgets. Do not hesitate to communicate With the ORIGINAL GOAL™ team to get our distinguished services, we are fully prepared to turn your ideas into a tangible reality that you enjoy and help you achieve your goals with ease and ease.</p>           
          </div>
        </div>
      </div>
    </section>
     {/* about_part ends */}

     

    </>
  )
}
