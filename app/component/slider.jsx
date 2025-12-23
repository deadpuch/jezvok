"use client"


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      // 1. Base setting (Mobile: 1 slide)
      slidesPerView={1}
      // 2. Responsive settings
      breakpoints={{
        // When window width is >= 640px (Tailwind 'sm')
        640: {
          slidesPerView: 1.5, // Shows a "peek" of the next slide
          spaceBetween: 20,
        },
        // When window width is >= 768px (Tailwind 'md')
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

      }}
      className="h-2/5"
    >
      {/* Slide 1 */}
      <SwiperSlide className="px-3">
        <div className="slide-card min-w-full h-52 bg-[#F7F7F2] rounded-3xl relative overflow-hidden">
          <img
            src="doc_thumbs_up.png"
            className="w-full h-full object-right object-contain absolute bottom-0"
            alt="Quality"
          />
          <div className="absolute z-10 bottom-6 left-4 right-4">
            <h1 className="text-3xl font-bold font-inter">
              Quality You <br /> Can Trust
            </h1>
            <p className="mt-3 text-gray-500 font-inter">
              Safe, effective medicines developed to meet global quality
              standards. Science-Driven Innovation
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="px-3">
        <div className="slide-card min-w-full h-52 bg-[url('/second_Card.jpg')] bg-center bg-cover rounded-3xl overflow-hidden flex items-end relative ">
          <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />
          <div className="absolute z-10 bottom-6 left-4 right-4">
            <h1 className="text-3xl font-bold text-white font-inter">
              Science-Driven Innovation
            </h1>
            <p className="mt-3 text-gray-200 font-inter">
              Research-led solutions focused on improving patient outcomes.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide className="px-3">
        <div className="slide-card min-w-full h-52 bg-[url('/third_card.jpg')] bg-center bg-cover rounded-3xl overflow-hidden flex items-end relative ">
          <div className="absolute inset-0 bg-linear-to-t from-white/90 to-transparent" />
          <div className="absolute z-10 bottom-6 left-4 right-4">
            <h1 className="text-3xl font-bold font-inter">Care Built on Integrity</h1>
            <p className="mt-3 text-gray-500 font-inter">
              Ethical practices that build lasting trust in healthcare.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
