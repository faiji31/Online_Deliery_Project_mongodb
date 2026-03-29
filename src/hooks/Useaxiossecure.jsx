import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';


const AxiosSecure = axios.create({
      baseURL: "http://localhost:5000"
})

const Useaxiossecure = () => {
      const {user,logout} = useAuth()
      const navigate = useNavigate()

      useEffect( ()=> {
          const reqInterceptor =  AxiosSecure.interceptors.request.use(async (config)=>{
                  if(user){
                        const token = await user.getIdToken();
                        config.headers.Authorization = `Bearer ${token}`
                  }
                  return config
            })

            const resInterceptor  = AxiosSecure.interceptors.response.use((response)=>{
                  return response
            }, (error)=>{
                  console.log(error)

                  const statusCode = error.response?.status;
                  if (statusCode === 401 || statusCode === 403){
                        logout()
                        .then(()=>{
                            navigate('/login')
                        })

                  }


                  return Promise.reject(error)
                      
            })

            return () =>{
                  AxiosSecure.interceptors.request.eject(reqInterceptor)
                  AxiosSecure.interceptors.response.eject(resInterceptor)
            }

      },[user, logout, navigate])

      return AxiosSecure
};

export default Useaxiossecure;