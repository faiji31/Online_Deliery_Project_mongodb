import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Useaxiossecure from '../../../hooks/Useaxiossecure';

const Myparcel = () => {

      const {user} =useAuth()
      const AxiosSecure =Useaxiossecure()

      const {data: parcels = []} = useQuery({
            queryKey:['myparcels',user?.email],
            queryFn: async()=>{
              const res = await AxiosSecure.get(`/parcels?email=${user.email}`)
              return res.data
            }
      })

      return (
            <div>
                  <h2>All my Parcels: {parcels.length}</h2>
            </div>
      );
};

export default Myparcel;