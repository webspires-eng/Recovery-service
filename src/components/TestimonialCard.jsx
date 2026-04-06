import React from 'react'

const TestimonialCard = ({data}) => {
    return (
        <>
            <div className="p-4 relative border border-gray-400/50 rounded-2xl shadow-md h-full bg-white">
                <img className='size-5 absolute right-2 top-2' src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" />
                <div className="flex items-center gap-3 mb-2">
                    <div className="size-10 rounded-full overflow-hidden shrink-0">
                        <img className='size-full object-cover' src={data?.image || `https://ui-avatars.com/api/?name=${data?.name || 'User'}&background=random`} alt={data?.name} />
                    </div>
                    <div className="align-middle">
                        <h4 className='leading-none font-semibold mb-1'>{data?.name}</h4>
                        <small className='text-gray-500'>{data?.date}</small>
                    </div>
                </div>
                <div className="my-2 flex items-center gap-1">
                    <div className="flex">
                        {
                            [...Array(data?.stars || 5)].map((_, i) => (
                                <img  key={i} src="http://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Star"
                                    className="inline-block size-5" />
                            ))
                        }
                    </div>
                    <svg className="size-[18px] ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#1A73E8"/><path d="M16.293 8.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L11 13.586l5.293-5.293z" fill="#fff"/></svg>
                </div>

                <div className="mt-2">
                    <p className='text-sm text-gray-700'>{data?.text}</p>
                </div>
                
            </div>
        </>
    )
}

export default TestimonialCard
