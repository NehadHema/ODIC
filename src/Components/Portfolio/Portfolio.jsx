import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Portfolio() {
  return (
    <>
    {/* banner_part start */}
    <section class="banner_part">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="mt-5 pt-5 text-center" data-aos="fade-right">
            <h1 className='white'>Our Works</h1>           
        </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="sv">
        <path fill="rgb(224, 218, 218)" fill-opacity="555555.55"
          d="M0,64L40,74.7C80,85,160,107,240,144C320,181,400,235,480,218.7C560,203,640,117,720,96C800,75,880,117,960,138.7C1040,160,1120,160,1200,138.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
</section>
 {/* banner_part ends */}
 {/* works_part start */}
 <section class="feature_part  pt-5 pb-5 ">
      <div class="container mb-5 pb-5">
        <h2 className="text-center pb-5" >Our <span className="color">Works</span></h2>
        <div class="row mt-5 pt-5">
    <div class="col-sm-6 col-xl-4">
    <div class="single_feature">
    <div class="single_feature_part">
        <span class="single_feature_icon"><i className='fa-solid fa-desktop'></i></span>
            <NavLink className='text-center fs-5 text-decoration-none'><h5>Website Development</h5></NavLink>
        </div>
    </div>
</div>
<div class="col-sm-6 col-xl-4">
    <div class="single_feature">
        <div class="single_feature_part">
            <span class="single_feature_icon"><i class="fa-solid fa-magnifying-glass"></i></span>
            <NavLink className='text-center fs-5 text-decoration-none' to={'/services/seo/seodetails'} ><h5>SEO</h5></NavLink>
        </div>
    </div>
</div>
<div class="col-sm-6 col-xl-4">
    <div class="single_feature">
        <div class="single_feature_part">
            <span class="single_feature_icon"><i class="fa-regular fa-lightbulb"></i></span>
            <NavLink className='text-center fs-5 text-decoration-none' to={'/services/brand/graphics'} ><h5>Branding</h5></NavLink>
        </div>
    </div>
</div>
</div>
<div class="row mt-5 pt-5">

<div class="col-sm-6 col-xl-4">
    <div class="single_feature">
        <div class="single_feature_part">
            <span class="single_feature_icon"><i class="fa-solid fa-panorama"></i></span>
            <NavLink className='text-center fs-5 text-decoration-none' to={'/services/seo/marketing'}><h5>Social Media Marketing</h5></NavLink>
        </div>
    </div>
</div>
<div class="col-sm-6 col-xl-4">
    <div class="single_feature">
        <div class="single_feature_part">
            <span class="single_feature_icon"><i class="fa-solid fa-mobile-screen-button"></i></span>
            <NavLink className='text-center fs-5 text-decoration-none' ><h5>Mobile Development</h5></NavLink>
        </div>
    </div>
</div>
</div>

      </div>
    </section>
 {/* works_part end */}


    </>
  )
}
