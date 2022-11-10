import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Images/logo-default-432x98.png'
import { AuthContext } from '../../../Auth/AuthProvider';

const Header = () => {
     const { user, logOut } = useContext(AuthContext);

     const handleLogOut = (event) => {
          event.preventDefault()
          logOut()
               .then(() => { })
               .catch(error => console.error(error))
     }
     return (
          <div>
               <div className="navbar bg-yellow-500 ">
                    <div className="navbar-start">
                         <img src={logo} className='w-40 ml-0 md:ml-8' alt="" />
                    </div>
                    <div className="navbar-center">
                         {/* desktop view menu */}
                         <div className="hidden font-semibold text-lg  lg:flex">
                              <ul className="menu menu-horizontal p-0">
                                   <li><a> <Link to='/home' >Home</Link> </a></li>
                                   <li><a><Link to='/blog'>Blog</Link> </a></li>
                                   {
                                        user?.uid ?
                                             <>
                                                  <li><a><Link to='/addService'>Add service</Link> </a></li>
                                                  <li><a><Link to='/myReviews'>My reviews</Link> </a></li>
                                             </>
                                             :

                                             ''
                                   }
                              </ul>
                         </div>

                         {/* mobile view menu */}
                         <div className="dropdown lg:hidden sm:block">
                              <label tabIndex={0} className="btn btn-ghost btn-circle">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                   <li><a> <Link to='/home' >Home</Link> </a></li>
                                   <li><a><Link to='/blog'>Blog</Link> </a></li>
                                  {
                                   user?.uid ?
                                   <>
                                    <li><a><Link to='/addService'>Add service</Link> </a></li>
                                   <li><a><Link to='/myReviews'>My reviews</Link> </a></li>
                                   </>
                                   :
                                   " "
                                  }

                              </ul>
                         </div>
                    </div>
                    <div className="navbar-end mr-8">

                         {/* conditional sign logout  */}
                         <div>
                              {
                                   user?.email ?
                                        <Link onClick={handleLogOut} to='/login'> <button className='btn-sm hidden md:block mr-5 btn '>Log out</button> </Link>

                                        :

                                        <Link to='/signup'><button className='btn hidden md:block btn-sm mr-5 btn-primary'>Register</button></Link>
                              }
                         </div>

                         {/* user dropdown end  */}

                         <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                   <div className="w-16 rounded-full">
                                        {
                                             user?.photoURL ?
                                                  <img src={user?.photoURL} />
                                                  :
                                                  //Anonymous when not user
                                                  <img src='https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258193-stock-illustration-anonymous-business-man-icon.jpg' />
                                        }
                                   </div>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56">
                                   <li>
                                        <a className="justify-between">
                                             {
                                                  user?.uid ?
                                                       <span className='text-black text-bold mr-3'>  {user?.displayName} </span>
                                                       :
                                                       <span>Anonymous</span>
                                             }
                                             <span className="badge">New</span>
                                        </a>
                                   </li>
                                   <li>
                                        {
                                             user?.uid ?
                                                  <p>{user?.email}</p>
                                                  :
                                                  ''
                                        }
                                   </li>
                                   {
                                        user?.email ?
                                             <li><Link onClick={handleLogOut} to='/login'> Logout</Link></li>
                                             :
                                             <li><Link to='/login'>Log In</Link></li>
                                   }
                              </ul>
                         </div>
                    </div>
               </div>
          </div >
     );
};

export default Header;