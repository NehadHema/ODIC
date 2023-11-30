
import React, { useEffect } from "react";
import native from '../../images/services/mobile/native.jpg';
import flutter from '../../images/services/mobile/flutter.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Mobile() {
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
            <h1 className='white'>Mobile development</h1> 
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

      {/* mobile_part start */}
      <section class="feature_part  pt-2 pb-5 ">
        <div class="container mb-5">
          <div class=" align-self-center">
            <div class="single_feature_text  mt-5 p-5">
              <h2 className="color">Mobile development</h2>
              <p className="text-dark">
              Mobile application programming is the process of creating and developing programs designed to run on mobile devices that run on the Android or iPhone system, and constantly developing the efficiency of these programs to achieve the goal for which they were created, using one of the programming languages.  
              </p>
            </div>
          </div>

          <section className="feature_part pb-1 ">
  <div className="container mb-5 pt-5 pb-3">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6 mt-5" data-aos="fade-right">
            <h1 className='color'>Native Apps</h1>
            <p>These are applications tailored for each operating system separately, so an Android version does not work on iOS, and vice versa. In this type of applications, each version is programmed in a different programming language. For example, Java or Kotlin is used to program the version designed for the Android operating system, and Swift is used to program the version for the iOS operating system. Users do not notice the difference between them, as both versions share the same design, procedures, and database rules.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-2 mt-5" data-aos="fade-left">
        <img src={native} alt="" srcset="" className='aboutimage rounded-3' width='90%' height='90%' />
        </div>
    </div>
  </div>
          </section>

          <section className="feature_part  pb-1 ">
      <div className="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6 pt-3" data-aos="fade-right">
           <img src={flutter} alt="" srcset="" className='aboutimage rounded' width='90%' height='80%' />
          </div>
    
          <div className="col-lg-6 col-xl-6 mt-5 pt-5" data-aos="fade-left">
          <h1 className='color'>Flutter</h1>
            <p>Flutter is a mobile SDK that allows you to write an application in a single database and compile it for both Android and iOS.</p>           
          </div>
        </div>
      </div>
    </section>
        </div>
      </section>
      {/* mobile_part ends */}
    </>
  );
}
