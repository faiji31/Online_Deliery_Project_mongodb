import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({reviews}) => {
      const {userName,user_PhotoURL,date,review} = reviews
      return (
            <div>
                  <div className="max-w-md mx-auto">
      <div className="card bg-base-200 shadow-xl rounded-2xl p-6">
        
   
        <FaQuoteLeft className="text-4xl text-primary opacity-40 mb-4" />

 
        <p className="text-base-content/80 leading-relaxed">
          {review}
        </p>

    
        <div className="border-t border-dashed border-base-content/30 my-5"></div>


        <div className="flex items-center gap-4">
          
    
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-12">
             <img src={user_PhotoURL} alt="" />
            </div>
          </div>

      
          <div>
            <h3 className="font-semibold text-lg">{userName}</h3>
            <p className="text-sm opacity-70">{date}</p>
          </div>

        </div>

      </div>
    </div>
            </div>
      );
};

export default ReviewCard;