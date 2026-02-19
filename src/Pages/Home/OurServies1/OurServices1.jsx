import React from 'react';
import img1 from "../../../assets/safe.png"

const OurServices1 = () => {
      return (
            <div className='flex items-center bg-gray-300'>
                  <div>
                       <img src={img1} alt="" />
                  </div>
                  <div>
                       <h2>Live Parcel Tracking</h2>
                       <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                  </div>
            </div>
      );
};

export default OurServices1;