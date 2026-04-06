"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCard from './TestimonialCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  }
};

const ButtonGroup = ({ next, previous }) => {
  return (
    <>
      <button
        onClick={() => previous()}
        className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-[100] bg-white border border-gray-200 rounded-full w-10 h-10 hidden md:flex items-center justify-center shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all"
        aria-label="Previous"
      >
        <svg className="w-5 h-5 text-gray-700 pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      <button
        onClick={() => next()}
        className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-[100] bg-white border border-gray-200 rounded-full w-10 h-10 hidden md:flex items-center justify-center shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all"
        aria-label="Next"
      >
        <svg className="w-5 h-5 text-gray-700 pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </>
  );
};

const TestimonialCarousel = ({ data }) => {
  return (
    <div className="relative mt-10 max-w-[100vw] sm:max-w-full pb-8 md:px-6">
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3500}
        showDots={true}
        swipeable={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        itemClass="px-2 md:px-3"
      >
        {data.map((item) => (
          <div key={item.id} className="h-full py-4 pb-6">
            <TestimonialCard data={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
