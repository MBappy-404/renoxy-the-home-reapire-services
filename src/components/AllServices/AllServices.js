import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllService from './ShowAllService';
import useTitle from '../../Hooks/useTitle';

const AllServices = () => {
     const services = useLoaderData()
     useTitle('All service')
     // console.log(services);
     return (
          <div>
               <div>
                    <h1 className='text-4xl ml-3 md:ml-10 mt-3 font-bold'>Total Services- {services.length}</h1>
                  
                    <div className='container   m-auto gap-5 px-5 mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
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