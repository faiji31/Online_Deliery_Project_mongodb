import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard/ReviewCard';
import { Autoplay } from "swiper/modules";

const Reviews = ({ReviewsPromise}) => {

      const reviews =use(ReviewsPromise)
      console.log(reviews)
      return (
            <div className='my-24'>
                   <>
      <Swiper
      loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale:0.75,
          slideShadows: true,
        }}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
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