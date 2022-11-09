import React from 'react';
import '../Home/Home.css'
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import {FaStar}  from "react-icons/fa";


const ServiceDetails = () => {
     const { description, price, rating, name, logo } = useLoaderData();
     const { user } = useContext(AuthContext);
     return (
          <div className='container m-auto'>

               <div className='m-10'>
                    <figure className="px-10  pt-4">
                         <img src={logo} alt="service-img"  className="w-full  details-img   m-auto" />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title text-3xl font-bold ">{name}</h2>
                         <p className='text-xl text-slate-700 text-justify'>{description}</p>
                         <div className=" card-actions flex justify-evenly  mt-5">
                              <div>
                              <p className='text-center font-bold text-xl'> Rating: {rating} <small><FaStar className=' inline-block w-4 mb-2 text-yellow-600' ></FaStar></small>  </p>
                              </div>
                              <div>
                              <p className='text-center font-bold text-xl'>Service Price: {price} </p>
                              </div>
                         </div>

                         {/* user review section  */}
                         {
                              user?.uid ?
                                   <>
                                        <div className='mt-10'>
                                             <div className="w-full m-auto lg:w-7/12  bg-white p-5  rounded-lg ">
                                                  <h3 className="pt-4 text-3xl font-bold text-center">Add Your Review!</h3>
                                                  <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                                       <div className="mb-4 md:flex md:justify-between">
                                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                                 <label className="block mb-2 text-sm font-bold text-gray-700" for="Service Name">
                                                                      Your Name
                                                                 </label>
                                                                 <input
                                                                      className="w-full md:w-96 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                      id="Service Name"
                                                                      name='serviceName'
                                                                      type="text"
                                                                      placeholder="Your Name"
                                                                      required
                                                                 />
                                                            </div>

                                                       </div>
                                                       <div className="mb-4">
                                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                                                 Description
                                                            </label>
                                                            <textarea
                                                                 className='w-full border shadow'
                                                                 name='description'
                                                                 placeholder='Type your description....'
                                                                 required
                                                            />
                                                       </div>
                                                       <div className="mb-4 md:flex md:justify-between">
                                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                                 <label className="block mb-2 text-sm font-bold text-gray-700" for="url">
                                                                      Your Image URL
                                                                 </label>
                                                                 <input
                                                                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                      id="url"
                                                                      name='imageUrl'
                                                                      type="url"
                                                                      placeholder="url......."
                                                                      required
                                                                 />

                                                            </div>
                                                            <div className="md:ml-2">
                                                                 <label className="block mb-2 text-sm font-bold text-gray-700" for="rating">
                                                                      Rating
                                                                 </label>
                                                                 <input
                                                                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                      id="rating"
                                                                      name='rating'
                                                                      type="text"
                                                                      placeholder="Rating...."
                                                                      required
                                                                 />
                                                            </div>
                                                       </div>
                                                       <div className="mb-6 text-center">
                                                            <button
                                                                 className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                                                 type="submit"
                                                            >
                                                                 Add Review
                                                            </button>
                                                       </div>
                                                  </form>
                                             </div>
                                        </div>
                                   </>
                                   :
                                   <>
                                <div className='m-auto'>
                                <Link to='/login' >  <button className='w-full  btn mt-10 mb-10 btn-primary'>Please Log in to add Your review</button></Link>
                                </div>
                                   </>

                         }
                    </div>
               </div>
          </div>
     );
};

export default ServiceDetails;