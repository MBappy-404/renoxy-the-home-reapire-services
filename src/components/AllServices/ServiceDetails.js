import React, { useEffect } from 'react';
import '../Home/Home.css'
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';


const ServiceDetails = () => {
     const { description, price, rating, name, logo, _id } = useLoaderData();
     const { user } = useContext(AuthContext);

     const [review, setReview] = useState([]);
     useEffect(() => {
          fetch(`http://localhost:5000/reviews/${_id}`)
               .then(res => res.json())
               .then(data => setReview(data))
     }, [_id])
     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const reviewName = form.Name.value
          const reviewDescription = form.Description.value;
          const ratingReview = form.Rating.value;
          console.log(reviewName, reviewDescription, ratingReview);

          const userReview = {
               serviceId: _id,
               serviceName: name,
               name: reviewName,
               userEmail: user?.email,
               userPhoto: user.photoURL,
               rating: ratingReview,
               message: reviewDescription,

          }

          fetch('http://localhost:5000/reviews', {
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
                         <p className='text-xl text-slate-700 text-justify'>{description}.</p>
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

               <section>
                    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                         <div class="flex justify-center md:justify-end -mt-16">
                              <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={review.userPhoto} />
                         </div>
                         <div>
                              <h2 class="text-gray-800 text-3xl font-semibold">{review.serviceName}</h2>
                              <p class="mt-2 text-gray-600">{review.message}</p>
                         </div>
                         <div class="flex justify-end mt-4">
                              <a href="#" class="text-xl font-medium text-indigo-500">{review.name}</a>
                         </div>
                    </div>
               </section>

               <section>
                    {
                         user?.uid ?
                              <>
                                   <div className='mt-10 mb-10'>
                                        <div className="w-82 m-auto md:w-8/12 lg:w-6/12  bg-white   rounded-lg ">
                                             <h3 className="pt-4 text-3xl font-bold text-center">Add Your Review!</h3>
                                             <form onSubmit={handleSubmit} className="px-8 ml-0 pt-6 pb-8 mb-4  bg-white rounded">
                                                  <div className="mb-4  md:flex md:justify-evenly">
                                                       <div className="mb-4 md:mr-2 md:mb-0">
                                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="Name Name">
                                                                 Your Name
                                                            </label>
                                                            <input
                                                                 className="w-full  px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                 id=" Name"
                                                                 name='Name'
                                                                 type="text"
                                                                 placeholder="Your Name"
                                                                 required
                                                            />
                                                       </div>
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
                                   <div className='m-auto'>
                                        <Link to='/login' >  <button className='w-full  btn mt-10 mb-10 btn-primary'>Please Log in to add Your review</button></Link>
                                   </div>
                              </>

                    }
               </section>
          </div>
     );
};

export default ServiceDetails;