import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import ShowReview from './ShowReview';
import useTitle from '../../Hooks/useTitle';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MyReviews = () => {
     useTitle('My reviews')
     const { user } = useContext(AuthContext);
     const MySwal = withReactContent(Swal);
     const [reviews, setReviews] = useState([]);


     useEffect(() => {
          fetch(`https://home-service-server-rosy.vercel.app/reviews?email=${user?.email}`,)
               .then(res => res.json())
               .then(data => setReviews(data))
     }, [reviews]);

     const handleDelete = id => {

          const proceed = window.confirm('Are You Sure Delete Review')
          if (proceed) {
               fetch(`https://home-service-server-rosy.vercel.app/reviews/${id}`, {
                    method: 'DELETE',
                    headers: {
                         'content-type': 'application/json'
                    },

               })
                    .then(res => res.json())
                    .then(data => {
                         console.log(data);
                        if(data.deletedCount > 0){
                         MySwal.fire({
                              title: 'Delete Successfully',
                              text: '',
                              icon: 'success',
                              timer: 1500,
                              showConfirmButton: false,
                         });
                         const remaining = reviews.filter(review => review._id !== id);
                         setReviews(remaining);
                        }
                        

                    })
          }

     }
     return (
          <div className='mb-48'>
               <div>
                    <h1 className='text-2xl font-bold mt-5 mb-5 text-center '>My Reviews: {reviews.length}</h1>
               </div>
               <div className="overflow-x-auto w-full px-0 md:px-5">
                    <table className="table w-full">

                         <thead>
                              <tr>
                                   <th>
                                   </th>
                                   <th>Review</th>
                                   <th>Service Name</th>
                                   <th>Rating</th>
                                   <th className='flex justify-center'>Manage Review</th>
                              </tr>
                         </thead>
                         <tbody>


                              {
                                   reviews.map(review => <ShowReview
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                   ></ShowReview>)
                              }

                         </tbody>
                    </table>
               </div>

          </div>
     );
};

export default MyReviews;