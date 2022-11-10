import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import ShowReview from './ShowReview';

const MyReviews = () => {
     const { user } = useContext(AuthContext);
     const [reviews, setReviews] = useState([]);

     useEffect(() => {
          fetch(`http://localhost:5000/reviews?email=${user?.email}`,{

          headers:{
               authorization: `Bearer ${localStorage.getItem('token')}`
          }
          })
               .then(res => res.json())
               .then(data => setReviews(data))
     }, [reviews]);

     const handleDelete = id =>{

          const proceed = window.confirm('Are Your Sure want to delete');
          if(proceed){
               fetch(`http://localhost:5000/reviews/${id}`,{
                    method:'DELETE',
                    headers: {
                         'content-type': 'application/json'
                    },
                    
               })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
               })
          }

     }
     return (
          <div>
               <div>
                    <h1 className='text-2xl font-bold mt-5 mb-5 text-center '>My Review: {reviews.length}</h1>
               </div>
               <div className="overflow-x-auto w-full">
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