import React from 'react';
import img1 from "../../../assets/location-merchant.png"

const Location = () => {
      return (
            <div className='flex  items-center bg-secondary p-10 mb-10 rounded-2xl'>
                  <div>
                        <h1 className='text-white text-3xl font-bold mb-5'>Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
                        <p className='text-white text-1xl mb-5'>We offer the lowest delivery charge with <br /> the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                        <div className=''>
                              <button className='btn bg-[#CAEB66] rounded-full p-5 m-5 text-black font-bold'>Become a Merchant</button>
                              <button className='btn bg-accent-content text-yellow-400 rounded-full p-5 m-5 text-white font-bold'>Earn with Profast Courier</button>
                        </div>

                  </div>
                  <div>
                        <img src={img1} alt="" />
                  </div>
            </div>
      );
};

export default Location;