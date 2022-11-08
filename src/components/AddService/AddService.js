import React from 'react';

const AddService = () => {

     return (
          <div>
                
                    <div className="container mx-auto">
                         <div className="flex justify-center px-6 my-12">

                              <div className="w-full xl:w-3/4 border shadow-2xl lg:w-11/12 flex">

                                   <div
                                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                        style={{backgroundImage:` url('https://arscleanit.com.ng/wp-content/uploads/2017/12/house-maintenance-tips.jpg')`}}
                                   ></div>

                                   <div className="w-full lg:w-7/12 mt-10 bg-white p-5 rounded-lg lg:rounded-l-none">
                                        <h3 className="pt-4 text-3xl font-bold text-center">Add Your Service!</h3>
                                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                             <div className="mb-4 md:flex md:justify-between">
                                                  <div className="mb-4 md:mr-2 md:mb-0">
                                                       <label className="block mb-2 text-sm font-bold text-gray-700" for="Service Name">
                                                            Service Name
                                                       </label>
                                                       <input
                                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                            id="Service Name"
                                                            type="text"
                                                            placeholder="Service Name"
                                                       />
                                                  </div>
                                                  <div className="md:ml-2">
                                                       <label className="block mb-2 text-sm font-bold text-gray-700" for="number">
                                                          Service Price
                                                       </label>
                                                       <input
                                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                            id="lastName"
                                                            type="number"
                                                            placeholder="Price"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="mb-4">
                                                  <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                                       Service Description
                                                  </label>
                                                  <textarea
                                                  className='w-full border shadow'
                                                  placeholder='Type your description'
                                                  /> 
                                             </div>
                                             <div className="mb-4 md:flex md:justify-between">
                                                  <div className="mb-4 md:mr-2 md:mb-0">
                                                       <label className="block mb-2 text-sm font-bold text-gray-700" for="url">
                                                            Image URL
                                                       </label>
                                                       <input
                                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                            id="url"
                                                            type="url"
                                                            placeholder="url......."
                                                       />
                                                       
                                                  </div>
                                                  <div className="md:ml-2">
                                                       <label className="block mb-2 text-sm font-bold text-gray-700" for="rating">
                                                            Rating
                                                       </label>
                                                       <input
                                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                            id="rating"
                                                            type="number"
                                                            placeholder="Rating...."
                                                       />
                                                  </div>
                                             </div>
                                             <div className="mb-6 text-center">
                                                  <button
                                                       className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                                       type="button"
                                                  >
                                                       Add Service
                                                  </button>
                                             </div>
                                            
                                             
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
                
          </div>
     );
};

export default AddService;