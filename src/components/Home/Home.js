import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import slider1 from '../../Assets/Images/slider01.png'
import slider2 from '../../Assets/Images/slider.png'
import slider3 from '../../Assets/Images/slider3 Cover.png'
import './Home.css'
import Services from './Services/Services';
import OverView from './OverView/OverView';
import RecentProject from './Recent/RecentProject';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
     useTitle('Home')
     const services = useLoaderData();
     // console.log(services);
     return (

          <div>
               {/* Slider  */}

               < section slide className="carousel w-full container m-auto">
                    {/* slider1  */}
                    <div id="slide1" className="carousel-item relative   w-full">
                         <div className='carousel-img'>
                              <img src={slider1} alt="slider" className="w-full" />
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    {/* slider2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                         <div className='carousel-img'>
                              <img src={slider2} alt="slider" className="w-full" />
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    {/* slider3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                         <div className='carousel-img'>
                              <img src={slider3} alt="slider" className="w-full" />
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                         </div>
                    </div>

               </section>


               {/* services  */}

               <section>
                    <h1 className='text-center m-10 font-bold text-5xl'>Our Services</h1>
                    <div className='service container m-auto mb-5  grid grid-cols-1 gap-0 md:gap-x-10  md:grid-cols-2 lg:grid-cols-3'>

                         {
                              services.map(service => <Services
                                   key={service._id}
                                   service={service}
                              ></Services>)
                         }
                    </div>
                    <div className='text-center mb-5'>
                         <button className="btn btn-primary w-56 "> <Link to='/AllServices'>Show All Services</Link> </button>
                    </div>
               </section>

               {/* Over View  */}
               <section>
                    <OverView></OverView>
               </section>

                 {/* Recent Project   */}
               <section className='mb-16 mt-16'>
                    <RecentProject></RecentProject>
               </section>

          </div >

     );
};

export default Home;