import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged,signInWithPopup,signInWithEmailAndPassword,signOut,updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.Config';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

     const [user, setUser] = useState(null);

     // create user email and pass 
     const createUser = (email, password) =>{
          return createUserWithEmailAndPassword(auth, email, password)
     }

     //create user with google

     const googleLogin = (provider) =>{
          return signInWithPopup(auth, provider);
     }

     //sign in with email password

     const signIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email,password)
     }

     //signOut 

     const logOut = ()=>{
          return signOut(auth)
     }

     //USER PROFILE
     const userProfile = (profile)=>{
          return  updateProfile(auth.currentUser, profile)
     }

     useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

          setUser(currentUser);
         });

         return ()=>{
          unsubscribe()
         }
     },[])

   

     const authInfo = {user,signIn,userProfile, createUser,logOut,googleLogin}
     return (
          <AuthContext.Provider value={authInfo}>
             {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;