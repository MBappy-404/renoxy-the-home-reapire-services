import React from 'react';
import '../Home.css';
import { FaCheckCircle, FaGrinAlt, FaShoppingCart, FaThumbsUp } from "react-icons/fa";
import CountUp from 'react-countup';


const OverView = () => {
     return (
          <div className='overview mt-16 m-auto'>
               <div className=''>
                    <div className='grid grid-cols-2 text-center text-2xl text-white font-bold md:grid-cols-4 p-5'>
                         <div className='mb-5 p-0 md:p-10'>

                              <p className='mb-5'><FaThumbsUp className='text-6xl m-auto' /></p>
                              <p className='mb-8 mt-8 text-3xl'> <CountUp
                                   start={0}
                                   end={100}
                                   duration={5}
                              />%</p>
                              <h1>Customer Satisfaction</h1>
                         </div>
                         <div className='mb-5 p-0 md:p-10'>
                              <p className='mb-5'><FaShoppingCart className='text-6xl m-auto' /></p>
                              <p className='mb-8 mt-8 text-3xl'> <CountUp
                                   start={0}
                                   end={10}
                                   duration={5} /></p>
                              <h1>Years in the Market</h1>
                         </div>
                         <div className='mb-5 p-0 md:p-10'>
                              <p className='mb-5'><FaGrinAlt className='text-6xl m-auto' /></p>
                              <p className='mb-8 mt-8 text-3xl'><CountUp
                                   start={0}
                                   end={900}
                                   duration={5} />+</p>
                              <h1>Happy Clients</h1>
                         </div>
                         <div className='mb-5 p-0  md:p-10'>
                              <p className='mb-5'><FaCheckCircle className='text-6xl m-auto' /></p>
                              <p className='mb-8 mt-8 text-3xl'> <CountUp
                                   start={0}
                                   end={1200}
                                   duration={5} />+</p>
                              <h1>Projects Completed</h1>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default OverView;