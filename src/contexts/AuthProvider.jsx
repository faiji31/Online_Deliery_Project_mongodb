import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { CgPassword } from 'react-icons/cg';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const goggleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      const registerUser =(email,Password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,Password)
      }
      const signInUser =(email,password)=>{
                        setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
      }
      const signInGoggle =()=>{
                        setLoading(true)
            return signInWithPopup(auth,goggleProvider)
      }
      const logout =()=>{
            setLoading(true)
            return signOut(auth)
      }
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);
                  setLoading(false);
            });
            return () => unsubscribe();
      }, []);
      const authInfo = {
            user,
            loading,
            registerUser,
            signInUser,
            signInGoggle,
            logout
      };
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;