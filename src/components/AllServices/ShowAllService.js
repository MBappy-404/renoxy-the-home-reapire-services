import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ShowAllService = ({ service }) => {
  const { description, rating, logo, name, _id } = service;
  return (
    <div className="card w-80 m-auto md:ml-10 md:w-96 bg-base-100  shadow-2xl shadow-slate-800">
      <figure className="px-10 pt-10">
        <PhotoProvider>
          <PhotoView src={logo}>
            <img src={logo} className='rounded-lg' alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-2xl">{name}</h2>
        <p className='mb-3 text-slate-500 '>{description.slice(0, 100)}......</p>
        <div className="card-actions gap-8 flex justify-center">
          <p className='text-xl mr-0 md:mr-10 font-semibold text-green-800 mt-2'>Rating: {rating}</p>
          <button className="btn btn-md btn-primary "> <Link to={`/serviceDetails/${_id}`}>View Details</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default ShowAllService;