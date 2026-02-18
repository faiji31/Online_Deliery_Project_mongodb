import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";

const SmallCard = () => {
      return (
            <div className='mb-10 flex flex-col'>
                  <h1 className='text-2xl font-bold text-secondary'>How It Works</h1>

                  <div className='gap-6 m-5 items-center justify-center mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                       <div className='bg-gray-300 p-5 rounded-2xl'>
                        <TbTruckDelivery />
                        <p className='font-bold'>Booking Pick & Drop</p>
                        <p className='text-sm'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                       </div>
                       <div className='bg-gray-300 p-5 rounded-2xl'>
                        <TbTruckDelivery />
                        <p className='font-bold'>Cash On Delivery</p>
                        <p className='text-sm'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                       </div>
                       <div className='bg-gray-300 p-5 rounded-2xl'>
                        <TbTruckDelivery />
                        <p className='font-bold'>Delivery Hub</p>
                        <p className='text-sm'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                       </div>
                       <div className='bg-gray-300 p-5 rounded-2xl'>
                        <TbTruckDelivery />
                        <p className='font-bold'>Booking SME & Corporate</p>
                        <p className='text-sm'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                       </div>
                  </div>

            </div>
      );
};

export default SmallCard;