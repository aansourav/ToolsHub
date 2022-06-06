import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>

                      
          
            <footer class="py-5 footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-12">
                            <div class="text-center copyright">
                                <p>Copyright © SoUrAv | 2022 <br /> All Rights Reserved</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-12">
                            <ul class="social-media-icons text-right ">
                                <li><FaFacebookF className='text-white me-2'></FaFacebookF></li>
                                <li><FaInstagramSquare className='text-white me-2'></FaInstagramSquare></li>
                                <li><FaLinkedin className='text-white me-2'></FaLinkedin></li>
                                <li><FaPhone className='text-white me-2'></FaPhone></li>
                                <li><FaTwitter className='text-white me-2'></FaTwitter></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
              
             
            </footer>
        </>
    );
};

export default Footer;