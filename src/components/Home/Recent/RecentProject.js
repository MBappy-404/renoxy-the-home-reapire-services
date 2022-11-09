import React from 'react';

const RecentProject = () => {
     return (
          <div>
               <div className='text-center'>
                    <h1 className='text-4xl  font-bold'>RECENT PROJECTS</h1>
                    <p className=' text-slate-500 text-lg mt-5 '>Here are a few of many projects we have completed for our customers. We provide a professional service <br />
                         which includes consultation, free estimate, design, supply of materials and installation.</p>
               </div>

               {/* gallery */}

               <section className="overflow-hidden text-gray-700">
                    <div className="container px-5 py-2 mx-auto pt-12 lg:px-32">
                         <div className="flex flex-wrap -m-1 md:-m-2">
                              <div className="flex flex-wrap w-1/2">
                                   <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="https://media.istockphoto.com/photos/technician-repairing-an-hotwater-heater-picture-id178425815?b=1&k=20&m=178425815&s=170667a&w=0&h=AI3Vj1o3n4ZXG0MltjwYWEK0YkNR_NyEtcbGeqF1L_o=" />
                                   </div>
                                   <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="https://plus.unsplash.com/premium_photo-1663090005195-ace5c7e407dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cm9vZmVyc3xlbnwwfHwwfHw%3D&w=1000&q=80" />
                                   </div>
                                   <div className="w-full p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="https://img.freepik.com/premium-photo/man-repair-cleaning-air-conditioner-worker-home_163305-2188.jpg?w=2000" />
                                   </div>
                              </div>
                              <div className="flex flex-wrap w-1/2">
                                   <div className="w-full p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="https://www.mcap.com/Content/MCAP/UploadedImages/products-home-service-plan-content2-1.jpg" />
                                   </div>
                                   <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="https://www.servicepower.com/hubfs/appliance%20repair%20scheduling%20software.jpg" />
                                   </div>
                                   <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="https://media.gettyimages.com/photos/plumber-using-a-wrench-to-repair-and-remove-the-water-supply-pipe-and-picture-id1185738880?b=1&k=20&m=1185738880&s=170667a&w=0&h=YYVfSGIumvns8n4agBQmtYjBhXAtDgtoRR9pvGiMwlc=" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div >
     );
};

export default RecentProject;