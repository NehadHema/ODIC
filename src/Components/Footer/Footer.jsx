import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

export default function Footer() {
  return (
    <>
      <footer class="footer-area">
        <div class="container p-5">
            <div class="row justify-content-between">
                <div class="col-sm-6 col-md-6 col-xl-6">
                    <div class="single-footer-widget footer_1 pt-5">
                        <h3>
                        <NavLink className="navbar-brand text-white text-italic me-5" to="#"><img src={logo} width="80px" height="80px" alt="logo"/> ORIGINAL GOAL™ </NavLink>

                        </h3>
                    </div>
                </div>
                
                <div class="col-xl-6 col-sm-6 col-md-6">
                    <div class="single-footer-widget footer_2 ps-5">
                        <h2>Contact Us</h2>
                        <div class="contact_info">
                            <p><span> Address :</span> Cairo </p>
                            <p><span> Phone :</span> 01201784521</p>
                            <p><span> Email : </span> nehad@y.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="container-fluid copyright pt-3">
            <div class="row">
                <div class="col-lg-12">
                    <div class="copyright_part_text text-center">
                        <div class="row">
                            <div class="col-lg-12">
                                <p class="footer-text m-0">Copyright ©2023 All rights reserved</p>                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
