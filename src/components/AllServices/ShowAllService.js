import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Hooks/useTitle';


const ShowAllService = ({ service }) => {
  useTitle('ShowAllService')

  const { description, price, logo, name, _id } = service;
  return (
    <div className='mb-8'>
      <div class="bg-gray-900 group shadow-lg w-full h-full transform hover:scale-105 transition duration-500 rounded p-3">
        <div class=" relative">
          <img class="w-full block rounded h-full lg:h-56" src={logo} alt=" " />
          <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
            <button class=" text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition px-8"> <button className="btn  mt-2 btn-primary no-animation "> <Link to={`/serviceDetails/${_id}`}>View Details</Link> </button></button>
          </div>
        </div>
        <div class="p-5">
          <h3 class="text-white text-lg mb-2">{name}</h3>
          <p className='text-gray-400 mb-3'>{description.slice(0, 200)}...</p>
          <div className=''>
            <p class="text-gray-200 font-semibold "> Service Fee: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllService;