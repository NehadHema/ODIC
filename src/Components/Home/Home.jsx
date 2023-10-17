import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import company from '../../images/company.jpg';
import about from '../../images/home/about.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
     {/* banner_part start */}
<section class="banner_part">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6" data-aos="fade-right">
            <h1>Making Your World Better</h1>
            <p>We are a company that specializes in E-marketing, website optimization for search engines, website design, application programming and advertising campaign management.</p>
            <div className="d-flex justify-content-end mt-5">
                <NavLink to={'/contactus'} className="btn button m-auto">Contact Us</NavLink>
            </div>
        </div>
        <div className="ccol-lg-6 col-xl-6" data-aos="fade-left">
           <img src={company} alt="" srcset="" className='imgs'/>
        </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="sv">
        <path fill="rgb(224, 218, 218)" fill-opacity="555555.55"
          d="M0,64L40,74.7C80,85,160,107,240,144C320,181,400,235,480,218.7C560,203,640,117,720,96C800,75,880,117,960,138.7C1040,160,1120,160,1200,138.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
</section>
 {/* banner_part ends */}


 {/* feature_part start */}
    <section class="feature_part mb-5 pt-5 pb-5 ">
        <div class="container mb-5 pb-5">
                <div class="col-sm-6 col-xl-3 align-self-center">
                    <div class="single_feature_text ">
                            <h2>Awesome Feature</h2>
                            <p className='text-dark'> we offer some services</p>  
                    </div>
                </div>
                <div class="row mt-5">

                <div class="col-sm-6 col-xl-4">
                    <div class="single_feature">
                        <div class="single_feature_part">
                            <span class="single_feature_icon"><i className="fa-solid fa-briefcase"></i></span>
                            <h4 className='ms-2'>Application Design</h4>
                            <p>We are a custom app design company that prides itself on our comprehensive services in the field of modern technology and design.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                    <div class="single_feature">
                        <div class="single_feature_part">
                            <span class="single_feature_icon"><i className='fa-solid fa-desktop'></i></span>
                            <h4 className='ms-4'>Web Design</h4>
                            <p>We are the best web design and development company, and we know very well that the world has come to live inside the Internet, so you lag behind competitors if you do not use digital social media. </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <div className="single_feature">
                        <div className="single_feature_part single_feature_part_2">
                            <span className="single_service_icon style_icon"><i className="fa-solid fa-palette"></i></span>
                            <h4 className='ms-4'>Graphic design</h4>
                            <p>Do you need to develop a strong identity for your brand Are you looking for a way to attract more customers and spread awareness of your brand ORIGINAL GOAL™ is here to help you with that. </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                    <div class="single_feature">
                        <div class="single_feature_part single_feature_part_2">
                            <span class="single_service_icon style_icon"><i class="fa-solid fa-calendar-days"></i></span>
                            <h4 className='ms-5'>E-Marketing</h4>
                            <p>We aim to help entrepreneurs promote their businesses online in a professional and effective manner. Through our experience in the field of e-marketing and social media, we offer you comprehensive solutions to attract potential customers and increase your market share. </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                    <div class="single_feature">
                        <div class="single_feature_part single_feature_part_2">
                            <span class="single_service_icon style_icon"><i className="fa-solid fa-hospital-user"></i></span>
                            <h4 className='ms-5'>Advertising campaigns</h4>
                            <p>ORIGINAL GOAL™ is an important digital platform to support advertising campaigns through social networks, which is an effective way to communicate with target audiences. With the right advertising campaigns, businesses can achieve great results and attract more visitors and customers.  </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                    <div class="single_feature">
                        <div class="single_feature_part single_feature_part_2">
                            <span class="single_service_icon style_icon"><i className="fa-solid fa-chart-area"></i></span>
                            <h4 className='ms-2'>Performance report</h4>
                            <p>The performance report is one of the important tools that we use to measure and improve our performance on social media platforms. It allows us to see what is working and what is not working in our marketing campaigns and helps us determine what steps need to be taken to improve results. We value the importance of providing our clients with comprehensive and detailed performance reports. We are committed to delivering tangible and superior results and improving outcomes. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-5">
                <NavLink to={'/services'} className="btn button">More Services</NavLink>
            </div>
        </div>
    </section>
     {/* feature_part ends */}

      {/* about_part start */}
<section class="banner_part">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
    <div className="col-lg-6 col-xl-6" data-aos="fade-right">
           <img src={about} alt="" srcset="" className='aboutimage' width='90%'/>
        </div>
    
       <div className="col-lg-6 col-xl-6" data-aos="fade-left">
            <h1>ABOUT US</h1>
            <p>Managing the digital ecosystem for your brand with a result driven approach! From Digital Media Buying, Campaign Development, Blogger Outreach Programs to Content Development, we do it all in-house.</p>
            <div className="d-flex justify-content-end mt-5">
                <NavLink to={'/about'} className="btn button m-auto">Read More</NavLink>
            </div>
            </div>
</div>
        
  </div>
</section>
 {/* about_part ends */}

    </>
  )
}
