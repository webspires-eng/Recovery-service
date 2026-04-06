import React from 'react'

const RecoverCard = ({ data }) => {
    return (
        <>
            <div className="px-4 py-3 text-center">
                <div className="size-32.5 mb-4 mx-auto">
                    <img loading="lazy" width="130" height="130" src={data.image} alt="" className='size-full object-contain' />
                </div>
                <h4 className='text-[22px] uppercase mb-5 text-orange leading-none font-[800]'>{data.title}</h4>
                <p className='text-[18px] font-[400] leading-tight'>{data.description}</p>
            </div>
        </>
    )
}

export default RecoverCard
