import React from 'react';
import { FaStar } from "react-icons/fa";

const ReviewCard = ({review}) => {
     return (
          <div className='flex justify-center '>
               <div class=" w-96 md:w-full py-4 px-8  bg-white shadow-lg  rounded-lg my-20">
                         <div class="flex justify-center md:justify-end -mt-16">
                              <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={review.userPhoto} alt='img'/>
                         </div>
                         <div>
                              <h2 class="text-gray-800 text-3xl font-semibold">{review.serviceName}</h2>
                              <p class="mt-2 text-gray-600">{review.message}</p>
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