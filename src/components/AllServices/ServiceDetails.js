import React, { useEffect } from 'react';
import '../Home/Home.css'
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import useTitle from '../../Hooks/useTitle';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const ServiceDetails = () => {
     useTitle('Service details');
     const MySwal = withReactContent(Swal);
     const { description, price, rating, name, logo, _id } = useLoaderData();
     const { user } = useContext(AuthContext);

     const [reviews, setReview] = useState([]);
     useEffect(() => {
          fetch(`https://home-service-server-rosy.vercel.app/reviews/service?serviceID=${_id}`)
               .then(res => res.json())
               .then(data => setReview(data))
     }, [reviews]);

     // review user
     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const reviewName = user.displayName;
          const reviewDescription = form.Description.value;
          const ratingReview = form.Rating.value;
          console.log(reviewName, reviewDescription, ratingReview);

          const userReview = {
               serviceId: _id,
               serviceName: name,
               name: reviewName,
               email: user.email,
               userPhoto: user.photoURL,
               rating: ratingReview,
               message: reviewDescription,
          }

          //  user review post  mongo db 
          fetch('https://home-service-server-rosy.vercel.app/reviews', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(userReview)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                         MySwal.fire({
                              title: 'Review Added',
                              text: '',
                              icon: 'success',
                              timer: 1500,
                              showConfirmButton: false,
                         });
                         form.reset();
                    }
               })
     }


     return (
          <div className='container m-auto'>

               {/* service details  */}
               <section className=''>
                    <figure className="px-10  pt-4">
                         <img src={logo} alt="service-img" className="w-full  details-img   m-auto" />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title text-3xl font-bold ">{name}</h2>
                         <p className='text-md md:text-xl text-slate-700 text-justify'>{description}.</p>
                         <div className=" card-actions flex justify-evenly  mt-5">
                              <div>
                                   <p className='text-center font-bold text-xl'> Rating: {rating} <small><FaStar className=' inline-block w-4 mb-2 text-yellow-600' ></FaStar></small>  </p>
                              </div>
                              <div>
                                   <p className='text-center font-bold text-xl'>Service Price: {price} </p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Review form   */}
               <section>
                    {
                         user?.uid ?
                              <>
                                   <div className='mt-10 mb-10'>
                                        <div className=" w-72 m-auto md:w-8/12 lg:w-6/12  bg-white  ">
                                             <h3 className="pt-4 text-3xl font-bold text-center">Add Your Review!</h3>
                                             <form onSubmit={handleSubmit} className="px-8 ml-0 pt-6 pb-8 mb-4  bg-white rounded">
                                                  <div className="mb-4  md:flex md:justify-evenly">

                                                       <div className="mb-4 md:mr-2 md:mb-0">
                                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="Service Name">
                                                                 Rating
                                                            </label>
                                                            <input
                                                                 className="w-full  px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                 id="Rating"
                                                                 name='Rating'
                                                                 type="text"
                                                                 placeholder="Rating"
                                                                 required
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="mb-4  md:flex md:justify-center">
                                                       <div className="mb-4 md:mr-2 md:mb-0">
                                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="Service Name">
                                                                 Description
                                                            </label>
                                                            <input
                                                                 className="w-full md:w-96 h-20  px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                 id="Description"
                                                                 name='Description'
                                                                 type="text"
                                                                 placeholder="Description"
                                                                 required
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="mb-6 text-center">
                                                       <button
                                                            className="w-52 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
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
                                   <div className='flex justify-center'>
                                        <Link to='/login' >  <button className='w-full md:w-96 btn mt-10 mb-10 btn-primary'>Please Log in to add Your review</button></Link>
                                   </div>
                              </>

                    }
               </section>

               {/* service Review  */}
               <section className=''>
                    <h2 className='text-3xl font-bold text-center m-10 '> Service Review</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-0 '>
                         {
                              reviews.length ?
                                   reviews.map(review => <ReviewCard
                                        key={review._id}
                                        review={review}
                                   ></ReviewCard>)

                                   :
                                   <h2 className='text-3xl font-bold text-center m-10 '>Review Not Yet....... !</h2>
                         }
                    </div>
               </section>
          </div>
     );
};

export default ServiceDetails;