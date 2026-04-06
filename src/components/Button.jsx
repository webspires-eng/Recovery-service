import React from 'react'

const Button = ({ href, title, subTitle, text, theme = 'light' }) => {
    return (
        <>
            <a href={href} className="bg-orange mb-1 outline-none text-sm text-white hover:bg-blue px-6 py-3 rounded-full transition-colors duration-300 block">
                <div className="flex flex-col justify-center items-center">
                    <span className='text-[22px] font-[700]'>{title}</span>
                    {subTitle}
                </div>
            </a>
            <span className={`text-[16px]  text-gray-600 block text-center ${theme === 'light' ? 'text-gray-600' : 'text-white/80'}`}>{text}</span>
        </>
    )
}

export default Button
