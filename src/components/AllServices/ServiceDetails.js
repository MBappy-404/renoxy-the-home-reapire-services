import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
     const { description, price, rating, name, logo } = useLoaderData();
     return (
          <div className='container'>

               <div className='m-10'>
                    <figure className="px-10 pt-10">
                         <img src={logo} alt="Shoes" className="w-96 m-auto" />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title text-2xl font-semibold ">{name}</h2>
                         <p className='text-xl'>{description}</p>
                         <div className=" card-actions flex justify-center  mt-5">
                              <p className='text-center text-xl'>Rating: {rating} </p>
                              <p className='text-center text-xl'>Price: {price} </p>
                         </div>

                    </div>

               </div>


          </div>
     );
};

export default ServiceDetails;