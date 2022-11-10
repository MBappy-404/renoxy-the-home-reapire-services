import React from 'react';
import { FaEdit } from "react-icons/fa";


const ShowReview = ({ review, handleDelete }) => {
     const { serviceName, rating, message, _id } = review;

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

          fetch(`http://localhost:5000/reviews/${_id}`, {
               method: "PUT",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(updateReview)

          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
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

                    <label htmlFor="my-modal-6" className="btn"> <FaEdit></FaEdit></label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal sm:modal-middle">
                         <div className="modal-box">
                              <form onSubmit={handleUpdate}>
                                   <h3 className="font-bold text-lg">Update Your Review!</h3>
                                   <p>Service: {serviceName}</p> <br />
                                   <p>Rating</p>
                                   <input type="text" defaultValue={rating} name='rating' className="input mb-2 input-bordered input-primary w-full max-w-xs" required />  <br />
                                   <p>Review</p>
                                   <input type="text" defaultValue={message} name='message' className="input mb-2 input-bordered input-primary w-full max-w-xs" required />
                                  
                                  {/* update or cancel  */}
                                   <div className="modal-action">
                                        <input htmlFor="my-modal-6" className="btn" type="submit" value='Update' />
                                        <label htmlFor="my-modal-6" className="btn">Not Now!</label>
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