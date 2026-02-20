import React from 'react';
import img1 from "../../../assets/safe.png"
import img2 from "../../../assets/live-tracking.png"

const OurServices1 = () => {
      return (
            <div>
                  <div className='flex items-center bg-gray-300 rounded-lg p-5 gap-5 mb-5'>
                  <div className='border-r-2 border-dotted p-5'>
                       <img src={img2} alt="" /> 
                  </div>
                  <div>
                       <h2 className='font-bold text-secondary'>Live Parcel Tracking</h2>
                       <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get <br /> instant status updates for complete peace of mind.</p>
                  </div>
                  
            </div>
            <div className='flex mb-5 items-center bg-gray-300 rounded-lg p-5 gap-5'>
                  <div className='border-r-2 border-dotted p-5'>
                       <img src={img1} alt="" /> 
                  </div>
                  <div>
                       <h2 className='font-bold text-secondary'>100% Safe Delivery</h2>
                       <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process <br /> guarantees safe and damage-free delivery every time.</p>
                  </div>
                  
            </div>
            <div className='flex mb-5 items-center bg-gray-300 rounded-lg p-5 gap-5'>
                  <div className='border-r-2 border-dotted p-5'>
                       <img src={img1} alt="" /> 
                  </div>
                  <div>
                       <h2 className='font-bold text-secondary'>24/7 Call Center Support</h2>
                       <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery <br /> concerns—anytime you need us.</p>
                  </div>
                  
            </div>
            </div>
      );
};

export default OurServices1;