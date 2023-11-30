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
            <p className='white'>We are a company that specializes in E-marketing, website optimization for search engines, website design, application programming and advertising campaign management.</p>
            <div className="d-flex justify-content-end mt-5 btn1">
                <NavLink to={'/contactus'} style={{textDecoration: 'none'}} className="btn button m-auto">Contact Us</NavLink>
            </div>
        </div>
        <div className="col-lg-6 col-xl-6" data-aos="fade-left">
           <img src={company} alt="" srcset="" className='imgs img2'/>
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
                        <span class="single_feature_icon"><i className='fa-solid fa-desktop'></i></span>
                            <h4 className='text-center'>Website Development</h4>
                            <p>Website development services involve the creation, design, and implementation of websites. These services encompass a wide range of activities to build and launch functional, visually appealing, and user-friendly websites. Here are some common website development services.</p>                        
                            <div className='d-flex justify-content-end'>
                            <NavLink class="color fs-5" style={{textDecoration: 'none'}} to={'/services/website'}>Learn More   <i class="fa-solid fa-arrow-right fs-5"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                    <div class="single_feature">
                        <div class="single_feature_part">
                            <span class="single_feature_icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <h4 className='text-center'>SEO</h4>
                            <p>Our services are dedicated to enhancing a website's visibility and its organic (unpaid) positioning within search engine results pages. SEO endeavors to augment both the volume and quality of website traffic by refining multiple factors that search engines take into account during website ranking. Below, you'll find a selection of typical SEO services.</p>
                            <div className='d-flex justify-content-end'>
                            <NavLink class="color fs-5" style={{textDecoration: 'none'}} to={'/services/seo'}>Learn More   <i class="fa-solid fa-arrow-right fs-5"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                    <div className="single_feature">
                    <div class="single_feature_part">
                            <span class="single_feature_icon ms-5 mb-5 span1"><i class="fa-regular fa-lightbulb"></i></span>
                            <h4 className='text-center'>Branding</h4>
                            <p>Branding services are dedicated to the development and cultivation of a robust and unified brand identity for businesses or individuals. Branding serves the essential purpose of setting a company or product apart from its competitors, thereby shaping a distinctive perception in the minds of customers. Here are a few typical branding services. </p>
                            <div className='d-flex justify-content-end'>
                            <NavLink class="color fs-5"  style={{textDecoration: 'none'}} to={'/services/brand'}>Learn More   <i class="fa-solid fa-arrow-right fs-5"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                    <div class="single_feature">
                    <div class="single_feature_part">
                            <span class="single_feature_icon ms-5 mb-5 span1"><i class="fa-solid fa-panorama"></i></span>
                            <h4 className='text-center'>Social Media Marketing</h4>
                            <p>Social Media Marketing Services encompass a variety of tactics and approaches utilized for the promotion of products, services, or brands on social media platforms. These services are typically offered by marketing agencies or experts who specialize in harnessing the power of social media channels to connect with and captivate a specific audience. Here is a selection of prevalent social media marketing services. </p>
                            <div className='d-flex justify-content-end'>
                            <NavLink class="color fs-5"  style={{textDecoration: 'none'}} to={'/services/social'}>Learn More   <i class="fa-solid fa-arrow-right fs-5"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                    <div class="single_feature">
                        <div class="single_feature_part">
                            <span class="single_feature_icon mb-5"><i class="fa-solid fa-mobile-screen-button"></i></span>
                            <h4 className='text-center'>Mobile Development</h4>
                            <p>Mobile application programming is the process of creating and developing programs designed to run on mobile devices that run on the Android or iPhone system, and constantly developing the efficiency of these programs to achieve the goal for which they were created, using one of the programming languages. </p>
                            <div className='d-flex justify-content-end'>
                            <NavLink class="color fs-5"  style={{textDecoration: 'none'}} to={'/services/mobile'}>Learn More   <i class="fa-solid fa-arrow-right fs-5"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="d-flex justify-content-end mt-5">
                <NavLink to={'/services'}  style={{textDecoration: 'none'}} className="btn button">More Services</NavLink>
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
            <h1 className='text1'>ABOUT US</h1>
            <p className='white'>Managing the digital ecosystem for your brand with a result driven approach! From Digital Media Buying, Campaign Development, Blogger Outreach Programs to Content Development, we do it all in-house.</p>
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
