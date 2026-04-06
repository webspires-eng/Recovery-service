"use client";
import React, { useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialCarousel = ({ data }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-10 max-w-full group">
      {/* Left Chevron */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all"
        aria-label="Previous"
      >
        <svg className="w-5 h-5 text-gray-700 pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* Right Chevron */}
      <button 
        onClick={scrollRight}
        className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all"
        aria-label="Next"
      >
        <svg className="w-5 h-5 text-gray-700 pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-6 py-4 snap-x snap-mandatory px-4 md:px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {data.map((item) => (
          <div key={item.id} className="w-[300px] md:w-[350px] shrink-0 snap-center self-stretch">
            <TestimonialCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
