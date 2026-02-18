import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";

const SmallCard = () => {
      return (
            <div className='mb-10'>
                  <h1 className='text-2xl font-bold text-secondary'>How It Works</h1>

                  <div className='flex gap-6 m-5 space-x-0.5'>
                       <div className='bg-gray-300 p-5 rounded-2xl'>
                      <div className='size-6'>  <TbTruckDelivery /></div>
                        <p className='font-bold'>Booking Pick & Drop</p>
                        <p className='text-sm'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                       </div>
                       <div>
                        <TbTruckDelivery />
                        <p>Booking Pick & Drop</p>
                        <p>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                       </div>
                       <div>
                        <TbTruckDelivery />
                        <p>Booking Pick & Drop</p>
                        <p>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                       </div>
                       <div>
                        <TbTruckDelivery />
                        <p>Booking Pick & Drop</p>
                        <p>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                       </div>
                  </div>

            </div>
      );
};

export default SmallCard;