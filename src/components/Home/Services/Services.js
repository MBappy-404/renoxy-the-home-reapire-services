import React from 'react';


const Services = ({ service }) => {
  // console.log(service);
  const { description, logo, price, name } = service;

  return (
    <div className='mb-8'>
      <div class="bg-gray-900 shadow-lg transform hover:scale-105 transition duration-500 rounded p-3">
        <div class="group relative">
          <img class="w-full block rounded" src={logo} alt=" " />
          <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
            <button class=" text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition px-8">{description.slice(0,200) }...</button>
          </div>
        </div>
        <div class="p-5">
          <h3 class="text-white text-lg mb-2">{name}</h3>
          <p class="text-gray-400"> Service Fee: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;