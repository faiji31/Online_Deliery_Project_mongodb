import React from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { CgPassword } from 'react-icons/cg';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

      const registerUser =(email,Password) =>{
            return createUserWithEmailAndPassword(auth,email,Password)
      }
      const signInUser =(email,password)=>{
            return signInWithEmailAndPassword(auth,email,password)
      }
      const authInfo ={
            registerUser,
            signInUser
      }
      return (
            <AuthContext value={authInfo}>
                  {children}
                  
            </AuthContext>
      );
};

export default AuthProvider;