import logo from '../../assets/customer-top.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import CustomerReviewCard from './CustomerReviewCard';

export default function CustomerReview() {
  return (
    <>
      <div className="lg:w-6xl mx-auto my-10">
        <div className="flex flex-col items-center gap-5">
          <img src={logo} alt="" />
          <h1 className="font-bold text-3xl text-center">
            What our customers are sayings
          </h1>
          <p className="text-sm max-w-3xl text-center">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
        <div className="my-10">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="max-w-md">
              <CustomerReviewCard />
            </SwiperSlide>
            <SwiperSlide className="max-w-md">
              <CustomerReviewCard />
            </SwiperSlide>
            <SwiperSlide className="max-w-md">
              <CustomerReviewCard />
            </SwiperSlide>
            <SwiperSlide className="max-w-md">
              <CustomerReviewCard />
            </SwiperSlide>
            <SwiperSlide className="max-w-md">
              <CustomerReviewCard />
            </SwiperSlide>
            <SwiperSlide className="max-w-md">
              <CustomerReviewCard />
            </SwiperSlide>
            <SwiperSlide className="max-w-md">
              <CustomerReviewCard />
            </SwiperSlide>
            <SwiperSlide className="max-w-md">
              <CustomerReviewCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
