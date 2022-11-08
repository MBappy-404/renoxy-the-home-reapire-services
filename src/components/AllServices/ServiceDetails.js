import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
     const { description, price, rating, name, logo } = useLoaderData();
     return (
          <div className='container m-auto'>

               <div className='m-10'>
                    <figure className="px-10  pt-10">
                         <img src={logo} alt="Shoes" className="w-96 m-auto" />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title text-3xl font-bold ">{name}</h2>
                         <p className='text-xl text-slate-500 text-justify'>{description}</p>
                         <div className=" card-actions flex justify-center  mt-5">
                              <p className='text-center font-bold text-xl'>Rating: {rating} </p>
                              <p className='text-center font-bold text-xl'>Price: {price} </p>
                         </div>

                    </div>

               </div>


          </div>
     );
};

export default ServiceDetails;