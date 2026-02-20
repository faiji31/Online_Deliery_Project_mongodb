import React from 'react';
import img1 from '../../../assets/customer-top.png'

const CustomerSaying = () => {
      return (
            <div className="flex flex-col items-center justify-center min-h-[300px] text-center bg-white p-6 rounded-lg shadow">
                  <img src={img1} alt="Customer" className="mb-4 object-contain mx-auto" />
                  <h1 className="text-2xl font-bold mb-2">What our customers are sayings</h1>
                  <p className="text-gray-600 max-w-xl">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
      );
};

export default CustomerSaying;