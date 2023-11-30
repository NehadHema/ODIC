
import React, { useEffect } from "react";
import stratgey from '../../images/services/social/stratgey.jpg';
import account from '../../images/services/social/account.jpg';
import content from '../../images/services/social/content.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Social() {
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
            <h1 className='white'>Social Media Marketing</h1> 
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

      {/* social_part start */}
      <section class="feature_part  pt-2 pb-5 ">
        <div class="container mb-5">
          <div class=" align-self-center">
            <div class="single_feature_text  mt-5 p-5">
              <h2 className="color">Social Media Marketing</h2>
              <p className="text-dark">
              Social Media Marketing Services encompass a variety of tactics and approaches utilized for the promotion of products, services, or brands on social media platforms. These services are typically offered by marketing agencies or experts who specialize in harnessing the power of social media channels to connect with and captivate a specific audience. Here is a selection of prevalent social media marketing services.              </p>
            </div>
          </div>

          <section className="feature_part pb-1 ">
  <div className="container mb-5 pt-5 pb-3">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6 mt-5" data-aos="fade-right">
            <h1 className='color'>Social Media Strategy Development</h1>
            <p>This entails formulating a thorough strategy that delineates the objectives, intended audience, content approach, and selected social media platforms for marketing.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-2 mt-2" data-aos="fade-left">
        <img src={stratgey} alt="" srcset="" className='aboutimage rounded-3' width='90%' height='80%' />
        </div>
    </div>
  </div>
          </section>

          <section className="feature_part  pb-1 ">
      <div className="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6 pt-3" data-aos="fade-right">
           <img src={account} alt="" srcset="" className='aboutimage rounded' width='90%' height='95%' />
          </div>
    
          <div className="col-lg-6 col-xl-6 mt-5 pt-5" data-aos="fade-left">
          <h1 className='color'>Social Media Account Setup And Optimization</h1>
            <p>Establishing profiles on pertinent social media platforms and enhancing them to align with brand standards, enhance visual appeal, and maintain comprehensive and precise details.</p>           
          </div>
        </div>
      </div>
    </section>

    <section className="feature_part pb-1 ">
  <div className="container mt-5 mb-5 pt-2 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6 mt-5" data-aos="fade-right">
            <h1 className='color'>Content Creation</h1>
            <p>Creating captivating and pertinent content for social media posts, encompassing text, images, videos, and various media formats.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 " data-aos="fade-left">
           <img src={content} alt="" srcset="" className='aboutimage rounded' width='90%' height='90%'/>
        </div>
    </div>
  </div>
</section>
        </div>
      </section>
      {/* social_part ends */}
    </>
  );
}
