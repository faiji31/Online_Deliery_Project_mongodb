import React, { use } from 'react';

const Reviews = ({ReviewsPromise}) => {

      const reviews =use(ReviewsPromise)
      console.log(reviews)
      return (
            <div>
                  
            </div>
      );
};

export default Reviews;