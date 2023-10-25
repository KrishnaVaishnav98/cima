import React from 'react'

export const Button = ({ text, color, onClick }) => {

    return (
        <div onClick={onClick} className='w-full h-12  mt-8 flex gap-1 items-center cursor-pointer'>
            <div className={`w-5/6 h-12 ${color} items-center text-center`}>
                <button className='mt-2 bwStretchfont text-xl items-center text-neutral-800 font-extrabold'>{text}</button>
            </div>
            <div className={`w-1/6 h-12 ${color} items-center text-center`}>
            </div>
        </div>
    )
}
