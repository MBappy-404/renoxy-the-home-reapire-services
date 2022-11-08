import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
     const {description,price,rating,name,logo} = useLoaderData();
     return (
          <div>
              
          </div>
     );
};

export default ServiceDetails;