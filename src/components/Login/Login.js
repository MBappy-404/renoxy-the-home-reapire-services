import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {

     const [error, setError] = useState(); 
     const {signIn} = useContext(AuthContext);
     const MySwal = withReactContent(Swal);
     const navigate = useNavigate();

     const handleLogIn = (event) =>{
          event.preventDefault();

          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

          signIn(email, password)
          .then(result=>{
               const user = result.user;
               console.log(user);
               form.reset();
               MySwal.fire({
                    title: 'Login Success',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'Ok'
               });
               
               const currentUser = {
                    email: user.email
               }
               // console.log(currentUser);

               //get jwt token
               fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers:{
                         'content-type' : 'application/json'

                    },
                    body: JSON.stringify(currentUser)
               })
               .then(res => res.json())
               .then(data =>{
                    console.log(data);
                    localStorage.setItem('token', data.token)
               })

               navigate('/home')

          })
          .catch(err => {
               console.log(err);
               setError(err.message)
          })


     }

     return (
          <div>
                <div className="hero min-h-screen bg-slate-400">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <div className="text-center lg:text-left">
                            
                             <img src="https://cdni.iconscout.com/illustration/premium/thumb/account-login-4571935-3805756.png" className='w-full lg:w-full' alt="" />
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <h1 className="text-3xl mt-3 text-center font-bold">Login now!</h1>
                              <div className="card-body">

                                   <form onSubmit={handleLogIn}>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Email</span>
                                             </label>
                                             <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Password</span>
                                             </label>
                                             <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                             <label className="label">
                                                  
                                                  <p className='text-center'> New to Renoxy <Link className='text-purple-700 text-md font-bold' to="/signup">Register</Link></p>
                                             </label>
                                        </div>
                                        <p className=' text-red-700'>{error}</p>
                                        <div className="form-control mt-6">
                                             <button className="btn btn-primary">Login</button>
                                        </div>
                                        
                                   </form>

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;