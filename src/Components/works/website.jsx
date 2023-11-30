import React from 'react'

export default function website() {
  return (
    <>
     {/* banner_part start */}
<section class="banner_part">
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row pt-5">
       <div className="mt-5 pt-5 text-center" data-aos="fade-right">
            <h1 className='white'>Works</h1>           
        </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="sv">
        <path fill="rgb(224, 218, 218)" fill-opacity="555555.55"
          d="M0,64L40,74.7C80,85,160,107,240,144C320,181,400,235,480,218.7C560,203,640,117,720,96C800,75,880,117,960,138.7C1040,160,1120,160,1200,138.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
</section>
 {/* banner_part ends */}
<section class="feature_part mb-5 pt-5 pb-5 " id="works">
      <div class="container">
        <h1 class="text-center mb-4">Our <span class="textColor">Works</span></h1>
        <div class="row g-5 mt-5">
          <div class="col-md-4 col-sm-12 g-4 mb-3">
              <div class="item bg-white text-left p-3 rounded-4">
                <div class="image">
                  <img src="images/game.png" class="w-100 rounded" alt="" srcset=""/>
                </div>
                <a href="https://nehadhema.github.io/games/" target="_blank">
                  <div class="content">
                    <h5 class="p-2 textColor">Website Development</h5>
                    <p class="text-dark px-2">This website was made by HTML , SCSS ,
                      JS , Bootstrap and React.js </p>
                  </div>
                </a>
              </div>
          </div>
          <div class="col-md-4 col-sm-12 g-4 mb-3">
              <div class="item bg-white text-left p-3 rounded-4">
                <div class="image">
                <img src="images/moviescontext.png" class="w-100 rounded" alt=""
                srcset=""/>
            </div>
            <a href="https://nehadhema.github.io/MoviesContext/"
              target="_blank">
              <div class="content">
                <h5 class="p-2 textColor">SEO</h5>
                <p class="text-dark px-2">This website was made by HTML , SCSS ,
                  JS , Bootstrap , React , Context </p>
              </div>
            </a>
              </div>
          </div>
          <div class="col-md-4 col-sm-12 g-4 mb-3">
              <div class="item bg-white text-left p-3 rounded-4">
                <div class="image">
                <img src="images/yummy.png" class="w-100 rounded" alt=""
                srcset=""/>
            </div>
            <a href="https://nehadhema.github.io/Reciepe-yummy-Website/"
              target="_blank">
              <div class="content">
                <h5 class="p-2 textColor">Branding</h5>
                <p class="text-dark px-2">This website was made by HTML , CSS ,
                  Bootstrap and JQuery </p>
              </div>
            </a>
              </div>
          </div>
          <div class="col-md-4 col-sm-12 g-4 mb-3">
              <div class="item bg-white text-left p-3 rounded-4">
                <div class="image">
                  <img src="images/coffee.png" class="w-100 rounded" alt=""
                    srcset=""/>
                </div>
                <a href="https://nehadhema.github.io/Coffee/#home" target="_blank">
                  <div class="content">
                    <h5 class="p-2 textColor">Social Media Marketing</h5>
                    <p class="text-dark px-2">This website was made by HTML , CSS ,
                      JS </p>
                  </div>
                </a>
              </div>
          </div>
          <div class="col-md-4 col-sm-12 g-4 mb-3">
              <div class="item bg-white text-left p-3 rounded-4">
                <div class="image">
                  <img src="images/crud.png" class="w-100 rounded" alt="" srcset=""/>
                </div>
                <a href="https://nehadhema.github.io/CRUD/" target="_blank">
                  <div class="content">
                    <h5 class="p-2 textColor">Mobile development</h5>
                    <p class="text-dark px-2">This website was made by HTML , CSS
                      and JS </p>
                  </div>
                </a>
              </div>
          </div>

      </div>
      </div>
    </section>


    
    </>
  )
}
