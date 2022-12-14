import React from 'react';

const Discount = () => {
     return (
          <div>

               <div class="flex justify-center items-center mt-20 mb-20">

                    <section class="w-full bg-red-400">
                         <div class="container px-4 mx-auto py-16 pb-16">
                              <div class="grid grid-cols-1 my-10 lg:grid-cols-2">
                                   <div class="text-center text-white my-auto mx-4">
                                        <h1 class="font-GT-Pressura-Regular font-bold text-3xl">WANT DISCOUNTS?</h1>
                                        <h2 class="font-GT-Pressura-Regular text-xl">Join our mail list for news & coupons</h2>
                                   </div>
                                   <div class="py-2 mx-4 lg:py-10">
                                        <div class="rounded-full bg-white shadow flex w-full">
                                             <input
                                                  type="text"
                                                  placeholder="Enter your email to join our mailing list"
                                                  class="w-full rounded-tl-full focus:outline-none  rounded-bl-full py-2 px-4" />
                                             <button class="bg-yellow-400 rounded-tr-full rounded-br-full hover:bg-red-300 py-2 px-4">
                                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                                  </svg>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>

               </div>

          </div>
     );
};

export default Discount;