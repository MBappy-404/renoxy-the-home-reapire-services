import React from 'react';


const Services = ({service}) => {
     // console.log(service);
     const {description, logo, rating,name} = service;
     
     return ( 
          <div className="card w-72 md:w-96 bg-base-100 mb-5 hover:shadow-2xl  transition  shadow-2xl hover:shadow-slate-600">
          <figure className="px-10 pt-10">
            <img src={logo} alt="Shoes" className="rounded-xl w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-2xl">{name}</h2>
            <p className=' text-slate-500 '>{description.slice(0,100)}......</p>
            <div className="card-actions">
             <p className='text-xl font-semibold text-green-800'>Rating: {rating}</p>
            </div>
          </div>
        </div>
     );
};

export default Services;