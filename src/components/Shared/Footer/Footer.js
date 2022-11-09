import React from 'react';
import logo from '../../../Assets/Images/logo-default-432x98.png'

const Footer = () => {
     return (
          <div>
               <footer className="footer p-16 bg-yellow-500 text-lg text-black font-medium grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4   ">
                    <div className='m-auto'>
                        <img src={logo} className='w-56 mb-5' alt="" />
                         <p>RENOXY  Ltd.<br />Providing reliable service since 2012</p>
                    </div>
                    <div className='m-auto'>
                         <span className="footer-title">Services</span>
                         <a className="link link-hover">Electricity</a>
                         <a className="link link-hover">Roofing</a>
                         <a className="link link-hover">Plumbing</a>
                         <a className="link link-hover">Painting</a>
                    </div>
                    <div className='m-auto'>
                         <span className="footer-title">Company</span>
                         <a className="link link-hover">About us</a>
                         <a className="link link-hover">Contact</a>
                         <a className="link link-hover">Jobs</a>
                         <a className="link link-hover">Press kit</a>
                    </div>
                    <div className='m-auto'>
                         <span className="footer-title">Legal</span>
                         <a className="link link-hover">Terms of use</a>
                         <a className="link link-hover">Privacy policy</a>
                         <a className="link link-hover">Cookie policy</a>
                         <a className="link link-hover">Terms of service</a>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;