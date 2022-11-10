import React from 'react';
import logo from '../../../Assets/Images/logo-default-432x98.png'

const Footer = () => {
     return (
          <div>
               <footer className="footer  bottom-0  p-16 bg-yellow-500 text-lg text-black font-medium grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4   ">
                    <div className='m-auto'>
                        <img src={logo} className='w-56 mb-5' alt="" />
                         <p>RENOXY  Ltd.<br />Providing reliable service since 2012</p>
                    </div>
                    <div className='m-auto'>
                         <span className="footer-title">Services</span>
                         <a href=' ' className="link link-hover">Roofing</a>
                         <a href=' ' className="link link-hover">Plumbing</a>
                         <a href=' ' className="link link-hover">Electricity</a>
                         <a href=' ' className="link link-hover">Painting</a>
                    </div>
                    <div className='m-auto'>
                         <span className="footer-title">Company</span>
                         <a href=' ' className="link link-hover">About us</a>
                         <a href=' ' className="link link-hover">Contact</a>
                         <a href=' ' className="link link-hover">Jobs</a>
                         <a href=' ' className="link link-hover">Press kit</a>
                    </div>
                    <div className='m-auto'>
                         <span className="footer-title">Legal</span>
                         <a href=' ' className="link link-hover">Terms of use</a>
                         <a href=' ' className="link link-hover">Privacy policy</a>
                         <a href=' ' className="link link-hover">Cookie policy</a>
                         <a href=' ' className="link link-hover">Terms of service</a>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;