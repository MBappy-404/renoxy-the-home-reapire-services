import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {

     useTitle('Sign up')
     const { createUser, googleLogin, userProfile } = useContext(AuthContext);
     const [error, setError] = useState();
     const googleProvider = new GoogleAuthProvider()
     const navigate = useNavigate()
     const MySwal = withReactContent(Swal);
     const handleSubmit = (event) => {
          event.preventDefault();

          const form = event.target;
          const name = form.username.value;
          const email = form.email.value;
          const password = form.password.value;
          // console.log(name,email,password);

          createUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    handleUserProfile(name);
                    form.reset()
                    MySwal.fire({
                         title: 'Registration Success',
                         text: '',
                         icon: 'success',
                         confirmButtonText: 'Ok'
                    });
                    navigate('/home')

               })
               .catch(err => {
                    console.log(err)
                    setError(err.message)
               })



     }

     const handleGoogleSignIn = () => {

          googleLogin(googleProvider)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    MySwal.fire({
                         title: 'Registration Success',
                         text: '',
                         icon: 'success',
                         confirmButtonText: 'Ok'
                    });
                    navigate('/home')

               })
               .catch(err => {
                    console.log(err);
                    setError(err.message)
               })


     }
     const handleUserProfile = (name) => {
          const profile = { displayName: name }
          userProfile(profile)
               .then(() => { })
               .catch(error => console.error(error))

     }
     return (
          <div className='bg-slate-400'>
               <div className="hero min-h-screen">
                    <div className="hero-content flex-col mb-16 mt-16 lg:flex-row-reverse">
                         <div className="text-center lg:text-left">

                              <img src="https://nilgiricollege.ac.in/app/app-files/images/userlog.png" className='w-full lg:w-full' alt="" />
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-gray-700 bg-base-100">
                              <h1 className="text-3xl mt-3 text-center font-bold">Register Now!</h1>
                              <div className="card-body">

                                   <form onSubmit={handleSubmit}>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Name</span>
                                             </label>
                                             <input type="text" name='username' placeholder="username" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Email</span>
                                             </label>
                                             <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Password</span>
                                             </label>
                                             <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                             <label className="label">
                                                  <a> Already have an account?<Link className='font-semibold text-purple-700 ml-2' to="/login">Sign In</Link></a>
                                             </label>
                                        </div>
                                        <p className=' text-red-700 '>{error}</p>
                                        <div className="form-control mt-6">
                                             <button className="btn btn-primary">Register</button>
                                        </div>
                                        <h1 className=' text-center text-purple-700 font-semibold mt-3'>Sign Up With</h1>
                                        <div className=" flex justify-center mt-4">
                                             <button onClick={handleGoogleSignIn} className="btn w-56 btn-outline">
                                                  <img src="https://freesvg.org/img/1534129544.png" className='w-6 mr-3' alt="" />
                                                  Google</button>
                                        </div>
                                   </form>

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SignUp;