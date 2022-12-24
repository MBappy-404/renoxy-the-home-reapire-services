import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import slider1 from '../../Assets/Images/YTZ5SImNTJEOSZxg.webp'
import './Home.css'
import Services from './Services/Services';
import RecentProject from './Recent/RecentProject';
import useTitle from '../../Hooks/useTitle';
import Discount from './Discount/Discount';

const Home = () => {
  useTitle('Home')
  const services = useLoaderData();
  // console.log(services);
  return (

    <div>
      {/* Slider  */}

      < section slide className="">
        <section
          class="relative bg-[url(https://thumbs.dreamstime.com/b/builder-handyman-construction-tools-blue-background-81065060.jpg)] 
  lg:bg-[url(https://ld-prestashop.template-help.com/prestashop_eze_256/modules/jxmegalayout/extracontent/YTZ5SImNTJEOSZxg.jpg)] bg-cover bg-center bg-no-repeat"
        >
          <div
            class="absolute inset-0 lg:inset-auto bg-white/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/70 sm:to-white/25"
          ></div>

          <div
            class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
          >
            <div class="max-w-xl text-center sm:text-left">
              <h1 class="text-3xl font-extrabold sm:text-5xl">
                <h1>We've reimagined the </h1>

                <strong class="block font-extrabold text-rose-700">
                  home renovation experience!
                </strong>
              </h1>

              <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                Welcome to Renoxy, the leading home renovation services provider. We have been bringing the ideas of our clients into life since 2022.
              </p>

              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href=" "
                  class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </a>

                <a
                  href=" "
                  class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>


      {/* services  */}

      <section className='mt-5 md:mt-20 mb-5 md:mb-20'>
        <h1 className='text-center m-10 font-bold text-5xl'>Our Services</h1>
        <div className='service container m-auto mb-5  grid grid-cols-1 gap-0 md:gap-x-5 px-3 md:grid-cols-2 lg:grid-cols-3'>

          {
            services.map(service => <Services
              key={service._id}
              service={service}
            ></Services>)
          }
        </div>
        <div className='text-center mb-5'>
          <button  className="btn btn-primary no-animation w-56 "> <Link to='/AllServices'>See All Services</Link> </button>
        </div>
      </section>

       {/* Discount  */}

       <section>
        <Discount></Discount>
      </section>

      {/* Recent Project   */}
      <section className='mb-16 mt-16'>
        <RecentProject></RecentProject>
      </section>

     

    </div >

  );
};

export default Home;