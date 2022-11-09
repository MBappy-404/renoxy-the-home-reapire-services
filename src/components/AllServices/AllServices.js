import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllService from './ShowAllService';
import serviceImg from '../../Assets/Images/Black And Yellow Modern We Build Your Dream Home Facebook Cover .gif'

const AllServices = () => {
     const services = useLoaderData()
     console.log(services);
     return (
          <div>
               <div>
                 <img src={serviceImg} className='container m-auto w-full'  alt="" />
               </div>
               <div>
                  
                    <div className='container   m-auto gap-10 md:gap-14 mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                         {
                              services.map(service => <ShowAllService
                                   key={service._id}
                                   service={service}
                              ></ShowAllService>)
                         }
                    </div>
               </div>
           </div>
     );
};

export default AllServices;