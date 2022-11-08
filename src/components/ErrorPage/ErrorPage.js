import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
     return (
          <div>
               <div>
                   <Link to='/home'> <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" className='m-auto' alt="errorImage" /></Link>
               </div>
          </div>
     );
};

export default ErrorPage;