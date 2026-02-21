import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard/ReviewCard';

const Reviews = ({ReviewsPromise}) => {

      const reviews =use(ReviewsPromise)
      console.log(reviews)
      return (
            <div>
                   <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
            reviews.map(reviews=><SwiperSlide key={reviews.id}>
           <ReviewCard reviews={reviews}></ReviewCard>
        </SwiperSlide>)
        }
        
        
      </Swiper>
    </>
            </div>
      );
};

export default Reviews;