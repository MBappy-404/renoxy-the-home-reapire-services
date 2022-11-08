import React from 'react';
import slider1 from '../../Assets/Images/home-slide-1-1920x600.jpg'
import slider2 from '../../Assets/Images/home-slide-2-1920x600.jpg'
import slider3 from '../../Assets/Images/home-slide-3-1920x600.jpg'
import './Home.css'

const Home = () => {
     return (
          
               <div slide className="carousel w-full">

                    {/* slider1  */}

                    <div id="slide1" className="carousel-item relative   w-full">
                         <div className='carousel-img'>
                              <img src={slider1} alt="" className="w-full  rounded-xl" />
                         </div>
                        
                         <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                              <p className='text-5xl ml-16  font-bold text-center'>We've reimagined the home <br /> renovation experience!</p>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                         </div>
                    </div>

                      {/* slider2 */}

                    <div id="slide2" className="carousel-item relative w-full">
                          
                           <div className='carousel-img'>
                              <img src={slider2} alt="" className="w-full rounded-xl" />
                         </div>
                         <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                             
                         </div>
                         <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                              <p className='text-5xl ml-16 font-bold text-center'>We've reimagined the home <br /> renovation experience!</p>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                         </div>
                    </div>

                     {/* slider3 */}

                    <div id="slide3" className="carousel-item relative w-full">
                          
                           <div className='carousel-img'>
                              <img src={slider3} alt="" className="w-full rounded-xl" />
                         </div>
                         <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                              <p className='text-5xl ml-16 font-bold text-center'>We've reimagined the home <br /> renovation experience!</p>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                         </div>
                    </div>

               </div>
             
     
     );
};

export default Home;