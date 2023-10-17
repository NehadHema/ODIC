import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import app from '../../images/services/app.jpg';
import web from '../../images/services/web.jpg';
import mobile from '../../images/services/mobile.jpg';
import uiux from '../../images/services/uiux.jpg';
import design from '../../images/services/design.jpg';
import digital from '../../images/services/digital.jpg';
import voice from '../../images/services/voice.jpg';
import routn from '../../images/services/routn.jpg';
import search from '../../images/services/search.jpg';
import d from '../../images/services/3d.jpg';
import marketing from '../../images/services/marketing.jpg';
import report from '../../images/services/report.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Services() {
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
            <h1>Our Services</h1> 
            <p>Just Say The Word, We Can Do It All!</p>          
        </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="sv">
        <path fill="rgb(224, 218, 218)" fill-opacity="555555.55"
          d="M0,64L40,74.7C80,85,160,107,240,144C320,181,400,235,480,218.7C560,203,640,117,720,96C800,75,880,117,960,138.7C1040,160,1120,160,1200,138.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
</section>
 {/* banner_part ends */}


 {/* services_part start */}
 <section class="feature_part  pt-5 pb-1 ">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6" data-aos="fade-right">
            <h1 className='color'>Application Development</h1>
            <p>We are a custom app design company that prides itself on our comprehensive services in the field of modern technology and design. The mobile phone is an integral part of today's business world. For this reason, our application has the latest technology in the field to facilitate all your marketing operations for your company. Our company takes pride in providing high quality and cost effective application designs. We can provide applications that are compatible with various digital devices. Our creative design reflects your company's identity and helps attract target audiences. Our team is headed by a group of professional designers who have diverse experiences in designing multi-class applications. Through innovation and creativity, we will work with you to make sure that your project succeeds within the specified time frame and without breaking your budget. At a custom app design company, we make sure to provide the best design and customer service. Social Media Digital is the next step in digital business transformation. So, if you want to work on improving your brand's online presence, we believe we can greatly assist you in achieving that. Contact us today to learn more about our services and how you can benefit from them.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-5 mt-5" data-aos="fade-left">
           <img src={app} alt="" srcset=""  className='aboutimage' width='95%'/>
        </div>
    </div>
  </div>
</section>
<section class="feature_part  pt-5 pb-1 ">
      <div class="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6" data-aos="fade-right">
           <img src={web} alt="" srcset="" className='aboutimage' width='90%' height='50%'/>
          </div>
    
          <div className="col-lg-6 col-xl-6" data-aos="fade-left">
          <h1 className='color'>Web Development</h1>
            <p>We are the best web design and development company, and we know very well that the world has come to live inside the Internet, so you lag behind competitors if you do not use digital social media. It's time to create your own community for your business on the Internet, and we provide you with the best design and development services for your website on the Internet, and make it available to visitors and customers at any time and from anywhere. If you dream of your business being in every home and accessible to everyone, then you have come to the right place . We guarantee that you will build your site with confidence and security, and make it a global center that is easy to reach. Your company can achieve the success it desires with the best web design and development company. Contact us now and make your site a center for your new and existing customers, and let us help you achieve the best results.</p>           
          </div>
        </div>
      </div>
    </section>


    <section class="feature_part  pt-5 pb-1 ">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6" data-aos="fade-right">
            <h1 className='color'>Mobile Development</h1>
            <p>We at ORIGINAL GOAL™ take pride in designing the best user interface for a website or application and guarantee our customers that they will be comfortable using it. Our team of highly trained designers master modern design and user interface design in a distinctive and effective way. ORIGINAL GOAL™ has made the user interface design easy and smooth for users and it also provides a distinctive customer experience. A modern and consistent design system helps us maintain a great user experience and we strive to provide a distinctive and effective user interface. ORIGINAL GOAL™ guarantees you a great user experience by developing the uiux user interface. We use the best tools and technologies to ensure smooth and efficient interaction with users in a design interface that is designed specifically for you. At ORIGINAL GOAL™ we are working hard to make the uiux UI design simple and distinctive at the same time. We believe that good design is an essential step in the success of a business, which is why the company name ORIGINAL GOAL™ is specially designed to achieve this. Please feel free to contact us at ORIGINAL GOAL™ to achieve the best uiux UI design. We are ready to fulfill all your requirements and turn your wonderful ideas into a visual reality.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-5 mt-5" data-aos="fade-left">
           <img src={mobile} alt="" srcset="" className='aboutimage' width='90%'/>
        </div>
    </div>
  </div>
</section>
<section class="feature_part  pt-5 pb-1 ">
      <div class="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6" data-aos="fade-right">
           <img src={design} alt="" srcset="" className='aboutimage' width='90%'/>
          </div>
    
          <div className="col-lg-6 col-xl-6" data-aos="fade-left">
          <h1 className='color'>Graphic design</h1>
            <p>Do you need to develop a strong identity for your brand Are you looking for a way to attract more customers and spread awareness of your brand ORIGINAL GOAL™ is here to help you with that. In today's era, brands need to be strongly present on social media, and since your current and potential audience spends most of their time on these platforms, it's important to share engaging and stylish content with them. And create extremely attractive designs that will make your brand stand out. Our service includes high-quality graphic designs by talented experts with extensive experience in the field of design. It will help your brand take off with personalized content for your social media accounts. Social posts will be creatively and effectively designed to attract users and promote awareness of your brand. Not only that, we will help you promote your brand through digital advertising and optimize the algorithms for the website.</p>           
          </div>
        </div>
      </div>
    </section>



    <section class="feature_part  pt-5 pb-1 ">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6" data-aos="fade-right">
            <h1 className='color'>UI & UX</h1>
            <p>We at ORIGINAL GOAL™ take pride in designing the best user interface for a website or application and guarantee our customers that they will be comfortable using it. Our team of highly trained designers master modern design and user interface design in a distinctive and effective way. ORIGINAL GOAL™ has made the user interface design easy and smooth for users and it also provides a distinctive customer experience. A modern and consistent design system helps us maintain a great user experience and we strive to provide a distinctive and effective user interface. ORIGINAL GOAL™ guarantees you a great user experience by developing the uiux user interface. We use the best tools and technologies to ensure smooth and efficient interaction with users in a design interface that is designed specifically for you. At ORIGINAL GOAL™ we are working hard to make the uiux UI design simple and distinctive at the same time. We believe that good design is an essential step in the success of a business, which is why the company name ORIGINAL GOAL™ is specially designed to achieve this. Please feel free to contact us at ORIGINAL GOAL™ to achieve the best uiux UI design. We are ready to fulfill all your requirements and turn your wonderful ideas into a visual reality.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-5 mt-5" data-aos="fade-left">
           <img src={uiux} alt="" srcset="" className='aboutimage' width='90%' height='60%'/>
        </div>
    </div>
  </div>
</section>
<section class="feature_part  pt-5 pb-1 ">
      <div class="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6" data-aos="fade-right">
           <img src={routn} alt="" srcset="" className='aboutimage' width='80%' height='60%'/>
          </div>
    
          <div className="col-lg-6 col-xl-6" data-aos="fade-left">
          <h1 className='color'>Monteur</h1>
            <p>We are pleased to talk about ORIGINAL GOAL™ , which is distinguished by professionalism and professionalism in the field of video editing, or what is known as"monteur" or "Monteur". The editor is fully responsible for the cutting and installation of visual materials in a consistent narrative form. The editor usually works with the director to achieve the best results, editing the footage with shaping from the point of view and vision of the director, to create an overall narrative of the story on the screen. Therefore, the editor must familiarize himself in detail with the basics of shooting and directing, in order to avoid any old pieces that may cause a change in the intended meaning of the scene, etc. At ORIGINAL GOAL™ " we provide you with outstanding video editing services using the latest technologies and tools, in addition to a qualified and specialized team in the field of photography and directing, to achieve the highest levels of creativity and quality. Please do not hesitate to contact us, to get effective and comprehensive video editing services.</p>           
          </div>
        </div>
      </div>
    </section>



    <section class="feature_part  pt-5 pb-1 ">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6" data-aos="fade-right">
            <h1 className='color'>3D design</h1>
            <p>If you are looking for a high-quality three-dimensional design, you will find everything you need in the company name ORIGINAL GOAL™ ! We provide distinctive three-dimensional design services that are characterized by creativity and technical excellence. We always strive to meet the needs of our customers and provide the best services at competitive prices. ORIGINAL GOAL™ is able to create for you three-dimensional designs for all kinds of your projects, for example architectural designs, interior designs, illustrated panels about your products and services. We have a well-qualified team of designers and technicians specializing in three-dimensional design, and you can rely on their experience and competence to produce the best results. Using the latest three-dimensional design technology, we can provide you with clear and comprehensive photos and designs of your projects. We design the best and latest holographic technology specifically to meet your needs. At ORIGINAL GOAL™ , we take care to provide designs Three-dimensional with high quality and accurate details, so that customers can definitely rely on it. Therefore, contact us today to experience our best services in three-dimensional design.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-5 mt-5" data-aos="fade-left">
           <img src={d} alt="" srcset="" className='aboutimage' width='90%'/>
        </div>
    </div>
  </div>
</section>
<section class="feature_part  pt-5 pb-1 ">
      <div class="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6" data-aos="fade-right">
           <img src={digital} alt="" srcset="" className='aboutimage' width='90%' height='60%'/>
          </div>
    
          <div className="col-lg-6 col-xl-6" data-aos="fade-left">
          <h1 className='color'>Digital artists</h1>
            <p>If you are a digital artist, your career will be much easier with ORIGINAL GOAL™ . We are a technology company specializing in design and digital marketing and we aim to provide the best services to our clients of digital artists. ORIGINAL GOAL™ is based on the latest technologies and best practices in the field of design and digital marketing. We work hard to provide you with all the necessary tools you need to achieve great success as a digital artist. ORIGINAL GOAL™ 's team includes experts specializing in the field of design and digital marketing, with whom you can collaborate to design creative and interesting content. Our team is also in charge of improving the profitability and strategic vision of your brand. We pride ourselves on our distinctive and outstanding services, and we always focus on achieving the best results for our customers. If you are looking for a company that works to provide the best services to digital artists, please feel free to contact us today, and experience the services. </p>           
          </div>
        </div>
      </div>
    </section>


    <section class="feature_part  pt-5 pb-1 ">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6" data-aos="fade-right">
            <h1 className='color'>Voice over</h1>
            <p>We have a long experience in the field of Voiceover and are one of the best audio companies in the market. We put sound quality and attention to detail in the first place, and we are proud of our fluent command of the Arabic language, and achieving a high level of professionalism in dealing with all kinds of audio projects. We provide voice-over services for all advertising and documentary films, as well as help to record radio, television, theatrical advertisements, documentaries, educational explanations and electronic games. We are distinguished by high quality and competitive costs, and we also provide you with audio samples for listening and evaluation before starting work. We are working to satisfy you and achieve your aspirations, and we always strive to provide the best and creativity in all the audio works that we handle, all under the supervision of a professional and specialized team in the field. If you would like to inquire or schedule a meeting, do not hesitate to contact us.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-5 mt-5" data-aos="fade-left">
           <img src={voice} alt="" srcset="" className='aboutimage' width='90%' height='60%'/>
        </div>
    </div>
  </div>
</section>
<section class="feature_part  pt-5 pb-1 ">
      <div class="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6" data-aos="fade-right">
           <img src={marketing} alt="" srcset="" className='aboutimage' width='90%'/>
          </div>
    
          <div className="col-lg-6 col-xl-6" data-aos="fade-left">
          <h1 className='color'>E-Marketing</h1>
            <p>We aim to help entrepreneurs promote their businesses online in a professional and effective manner. Through our experience in the field of e-marketing and social media, we offer you comprehensive solutions to attract potential customers and increase your market share. We provide you with everything you need to make your project a success. We will work together to define your marketing goals and develop strategies that are relevant and attractive to your target audience. We are working hard to make you present in a strong and influential way in the digital business world. You can count on us to market and spread your products with the most effectiveness and success. We offer you social media platforms, featured ads, and email marketing services, all of which are great tools for online promotion. We will connect you with potential clients in an innovative and engaging manner. We chose to be your partner in your project. We care about your business and strive to provide the best and most effective e-marketing service. Contact us today to begin your journey to digital business success. Together, we will make the difference and help your business navigate its way into the future. </p>           
          </div>
        </div>
      </div>
    </section>

    
    <section class="feature_part  pt-5 pb-1 ">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="col-lg-6 col-xl-6" data-aos="fade-right">
            <h1 className='color'>Search Engine Optimization</h1>
            <p>Today's businesses need to reach all their customers easily and effectively. To achieve this, optimizing sites for search engines is the best way to attract cheap traffic and improve search results for free and without paying any cost per visit. By using ORIGINAL GOAL™ , companies can achieve their goals quickly and effectively. With the smart use of social media, companies can communicate with all their customers and keep them updated with the latest news and offers. By optimizing search engine results, companies can increase the number of visits to their sites and achieve positive and effective results. Instead of waiting for desired results to be achieved, companies can achieve these goals quickly and easily and without paying any cost per visit. So, make sure you optimize your company website well and use social media to communicate with all your customers effectively, and you will achieve positive and effective results in the end.</p>      
        </div>
        <div className="col-lg-6 col-xl-6 pt-5 mt-5" data-aos="fade-left">
           <img src={search} alt="" srcset="" className='aboutimage' width='90%'/>
        </div>
    </div>
  </div>
</section>
<section class="feature_part  pt-5 pb-1 ">
      <div class="container mb-5 pb-5">
        <div className="row pt-5">
          <div className="col-lg-6 col-xl-6" data-aos="fade-right">
           <img src={report} alt="" srcset="" className='aboutimage' width='90%'/>
          </div>
    
          <div className="col-lg-6 col-xl-6" data-aos="fade-left">
          <h1 className='color'>Performance report</h1>
          <p>We understand the importance of social media in promoting your brand and increasing customer interaction. Therefore, we always strive to improve customer experience by providing exceptional services across various social media platforms. The performance report is one of the important tools that we use to measure and improve our performance on social media platforms. It allows us to see what is working and what is not working in our marketing campaigns and helps us determine what steps need to be taken to improve results. We value the importance of providing our clients with comprehensive and detailed performance reports. We are committed to delivering tangible and superior results and improving outcomes. </p>           
          </div>
        </div>
      </div>
    </section>
     {/* services_part ends */}

     

    </>
  )
}