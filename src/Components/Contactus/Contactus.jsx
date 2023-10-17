import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import about from '../../images/home/about.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contactus() {
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
            <h1>Contact US</h1>           
        </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="sv">
        <path fill="rgb(224, 218, 218)" fill-opacity="555555.55"
          d="M0,64L40,74.7C80,85,160,107,240,144C320,181,400,235,480,218.7C560,203,640,117,720,96C800,75,880,117,960,138.7C1040,160,1120,160,1200,138.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
</section>
 {/* banner_part ends */}


 {/* contact_part start */}
 <section className="feature_part section_padding">
<div className="container">

  <div className="row">
    <div className="col-12">
      <h2 className="color">Get in Touch</h2>
    </div>
    <div className="col-lg-8">
           
      <form className="form-contact contact_form" action="" method="" id="contactForm" novalidate="novalidate"/>
       <div className="row">
      <div className="col-12">
        <div className="form-group">
            <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder = 'Enter Message'></textarea>
        </div>
      </div>
      <div className="col-sm-6 mt-3">
        <div className="form-group">
          <input className="form-control" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder = 'Enter your name'/>
        </div>
      </div>
      <div className="col-sm-6 mt-3">
        <div className="form-group">
          <input className="form-control" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder = 'Enter email address'/>
        </div>
      </div>
      <div className="col-12 mt-3">
        <div className="form-group">
          <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder = 'Enter Subject'/>
        </div>
      </div>
       </div>
        <div className="d-flex justify-content-end mt-3 mb-5">
      <button type="submit" className="button">Send Message</button>
         </div>
      <form/>      
    </div>
    <div className="col-lg-4">
      <div className="media contact-info d-flex">
        <span className="contact-info__icon"><i class="fa-solid fa-house"></i></span>
        <div className="media-body">
          <h3>Tanta,Egypt</h3>
          <p>Bahr Street</p>
        </div>
      </div>
      <div className="media contact-info d-flex">
        <span className="contact-info__icon"><i class="fa-solid fa-phone"></i></span>
        <div className="media-body">
          <h3>01201874003</h3>
          <p></p>
        </div>
      </div>
      <div className="media contact-info d-flex">
        <span className="contact-info__icon"><i class="fa-solid fa-envelope"></i></span>
        <div className="media-body">
          <h3>engnehad2021@gmail.com</h3>
          <h5>Send us your query anytime!</h5>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
     {/* contact_part ends */}

     

    </>
  )
}
