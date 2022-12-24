import React from 'react';
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const ShowReview = ({ review, handleDelete }) => {
     const { serviceName, rating, message, _id } = review;
      const MySwal = withReactContent(Swal);
    

     const handleUpdate = event => {
          event.preventDefault()

          const form = event.target;
          const rating = form.rating.value;
          const message = form.message.value;
          // console.log(rating, message);
          const updateReview = { rating, message };

          if (rating && message === ' ') {
               return alert('please fill input')
          }

          fetch(`https://home-service-server-rosy.vercel.app/reviews/${_id}`, {
               method: "PUT",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(updateReview)

          })
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    MySwal.fire({
                         title: 'Update Success',
                         text: '',
                         icon: 'success',
                         confirmButtonText: 'Ok'
                    });
               })
     }
     return (

          <tr>
               <th>
               </th>
               <td>
                    <div className="flex items-center space-x-3">
                         <div>
                             <p> {message.slice(0,50)}...</p>
                         </div>
                    </div>
               </td>
               <td>
                    {serviceName}
               </td>
               <td>{rating}</td>
               <th className='flex justify-evenly'>

                    <label htmlFor={`modal${_id}`} className="btn"> <FaEdit></FaEdit></label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={`modal${_id}`} className="modal-toggle" />
                    <div className="modal sm:modal-middle">
                         <div className="modal-box">
                         <label htmlFor={`modal${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                              <form onSubmit={handleUpdate}>
                                   <h3 className="font-bold text-lg">Update Your Review!</h3>
                                   <p>Service: {serviceName}</p> <br />
                                   <p>Rating</p>
                                   <input type="text" defaultValue={rating} name='rating' className="input mb-2 input-bordered input-primary w-full max-w-xs" required />  <br />
                                   <p>Review</p>
                                   <input type="text" defaultValue={message} name='message' className="input mb-2 input-bordered input-primary w-full max-w-xs" required />
                                  
                                  {/* update or cancel  */}
                                   <div className="modal-action">
                                        <input htmlFor={`modal${_id}`}   className="btn" type="submit" value='Update' />                  
                                   </div>
                              </form>
                         </div>
                    </div>
                    <button onClick={() => handleDelete(_id)} className="btn btn-secondary ">X</button>
               </th>
          </tr>
     )
};

export default ShowReview;