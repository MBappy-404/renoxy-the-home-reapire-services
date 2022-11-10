import React from 'react';
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
     return (
          
               <div className='flex justify-center '>
                    <div class=" w-80 py-4 px-8  bg-white shadow-lg  rounded-lg my-10">
                         <div class="flex justify-center md:justify-end -mt-16">
                              {
                              review?.userPhoto ?
                                   <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={review?.userPhoto} alt='img'/>
                                   :
                                   //Anonymous image when not user photo
                                   <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src='https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258193-stock-illustration-anonymous-business-man-icon.jpg' alt='img' />
                         }
                         </div>
                         <div>
                              <h2 class="text-gray-800 text-3xl font-semibold">{review.serviceName}</h2>
                              <p class="mt-2 text-gray-600 italic">{review.message}</p> <br />
                              <p>Rating: {review.rating} <small><FaStar className=' inline-block w-4 mb-2 text-yellow-600 mt-1'></FaStar></small> </p>
                         </div>
                         <div class="flex justify-end mt-4">
                              <a href=" " class="text-xl font-medium text-indigo-500">{review.name}</a>
                         </div>
                    </div>
               </div>
         
     );
};

export default ReviewCard;