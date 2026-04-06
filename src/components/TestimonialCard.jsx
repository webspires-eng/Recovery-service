import React from 'react'

const TestimonialCard = ({data}) => {
    return (
        <div className="p-6 relative border border-gray-100 rounded-2xl shadow-lg shadow-gray-200/40 h-full bg-white hover:shadow-xl transition-shadow duration-300">
            <img className='size-6 absolute right-4 top-4 opacity-90' src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="Google Review" />
            
            <div className="flex items-center gap-3 mb-4">
                <div className="size-12 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100">
                    <img className='size-full object-cover' src={data?.image || `https://ui-avatars.com/api/?name=${data?.name || 'User'}&background=random`} alt={data?.name} />
                </div>
                <div className="flex flex-col">
                    <h4 className='text-[16px] font-bold text-gray-900 leading-tight'>{data?.name}</h4>
                    <span className='text-[13px] text-gray-500 font-medium mt-0.5'>{data?.date}</span>
                </div>
            </div>

            <div className="mb-3 flex items-center gap-1">
                <div className="flex gap-0.5">
                    {
                        [...Array(data?.stars || 5)].map((_, i) => (
                            <img key={i} src="http://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Star"
                                className="inline-block size-[18px]" />
                        ))
                    }
                </div>
                <svg className="size-[16px] ml-1 opacity-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#1A73E8"/><path d="M16.293 8.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L11 13.586l5.293-5.293z" fill="#fff"/></svg>
            </div>

            <div className="mt-4">
                <p className='text-[15px] leading-relaxed text-gray-600 line-clamp-4'>"{data?.text}"</p>
            </div>
        </div>
    )
}

export default TestimonialCard
