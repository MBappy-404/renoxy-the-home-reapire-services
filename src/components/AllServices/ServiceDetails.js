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
               {/* <section className=''>
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
               </section> */}
               <div>
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-5 md:p-10 gap-0 rounded overflow-hidden m-6">
                         <div class="md:flex-shrink-0">
                              <img class="rounded-lg md:w-full lg:w-[550px]" src={logo} alt="img" />
                         </div>
                         <div class="mt-4 md:mt-2 md:ml-5">
                              <div class="uppercase tracking-wide text-2xl text-indigo-600 font-bold">{name}</div>


                              <p class="mt-2 text-gray-600">{description}.</p>
                              <div class="mt-5">
                                   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><p className='text-center fon-semibold'> Rating: {rating} <small><FaStar className=' inline-block w-4 mb-2 text-yellow-600' ></FaStar></small>  </p></span>
                                   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <p className='text-center font-semibold '>Service Price: {price} </p>
                                   </span>
                                   <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{/* The button to open modal */}
                                        <label htmlFor="my-modal-5" className="btn btn-sm text-xs rounded-full">Book Now</label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                                        <div className="modal">
                                             <div className="modal-box w-11/12 md:w-8/12 max-w-5xl">
                                             <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                  <div class="min-w-screen min-h-screen  flex items-center justify-center px-1 md:px-5">
                                                       <div class="w-full mx-auto rounded-lg bg-white   p-5 text-gray-700" style={{ maxWidth: '800px' }}>
                                                            <div class="w-full pt-1 pb-5">
                                                                 <div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                                                      <i class="mdi mdi-credit-card-outline text-3xl"></i>
                                                                 </div>
                                                            </div>
                                                            <div class="mb-10">
                                                                 <h1 class="text-center font-bold text-xl uppercase">Secure payment info</h1>
                                                            </div>
                                                            <div class="mb-3 flex -mx-2">
                                                                 <div class="px-2">
                                                                      <label for="type1" class="flex items-center cursor-pointer">
                                                                           <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked required />
                                                                           <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3" />
                                                                      </label>
                                                                 </div>
                                                                 <div class="px-2">
                                                                      <label for="type2" class="flex items-center cursor-pointer">
                                                                           <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" required />
                                                                           <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" class="h-8 ml-3" />
                                                                      </label>
                                                                 </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                 <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
                                                                 <div>
                                                                      <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" required/>
                                                                 </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                 <label class="font-bold text-sm mb-2 ml-1">Card number</label>
                                                                 <div>
                                                                      <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" required />
                                                                 </div>
                                                            </div>
                                                            <div class="mb-3 -mx-2 flex items-end">
                                                                 <div class="px-2 w-1/2">
                                                                      <label class="font-bold text-sm mb-2 ml-1">Expiration date</label>
                                                                      <div>
                                                                           <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                                                <option value="01">01 - January</option>
                                                                                <option value="02">02 - February</option>
                                                                                <option value="03">03 - March</option>
                                                                                <option value="04">04 - April</option>
                                                                                <option value="05">05 - May</option>
                                                                                <option value="06">06 - June</option>
                                                                                <option value="07">07 - July</option>
                                                                                <option value="08">08 - August</option>
                                                                                <option value="09">09 - September</option>
                                                                                <option value="10">10 - October</option>
                                                                                <option value="11">11 - November</option>
                                                                                <option value="12">12 - December</option>
                                                                           </select>
                                                                      </div>
                                                                 </div>
                                                                 <div class="px-2 w-1/2">
                                                                      <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                                           <option value="2020">2020</option>
                                                                           <option value="2021">2021</option>
                                                                           <option value="2022">2022</option>
                                                                           <option value="2023">2023</option>
                                                                           <option value="2024">2024</option>
                                                                           <option value="2025">2025</option>
                                                                           <option value="2026">2026</option>
                                                                           <option value="2027">2027</option>
                                                                           <option value="2028">2028</option>
                                                                           <option value="2029">2029</option>
                                                                      </select>
                                                                 </div>
                                                            </div>
                                                            <div class="mb-10">
                                                                 <label class="font-bold text-sm mb-2 ml-1">Security code</label>
                                                                 <div>
                                                                      <input class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                                                                 </div>
                                                            </div>
                                                            <div className="modal-action text-center">
                                                                 {/* <label  className="btn">Yay!</label> */}
                                                                 <label htmlFor="my-modal-5" class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> PAY NOW</label>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </span>
                              </div>
                         </div>
                    </div>
               </div>

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
                    <h2 className='text-3xl font-bold text-center mb-10 '> Service Review</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 lg:grid-cols-3 px-3 md:px-0 '>
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