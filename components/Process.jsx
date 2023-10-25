'use client'

import React from 'react'
import { Context } from '@app/context/Context'
import { FaCircle } from "react-icons/ai";
import { useContext } from 'react'

export const Process = () => {

    const { step, nextStep } = useContext(Context)
    //const step = 1;

    return (
        <div className='2xl:flex xl:flex lg:flex w-full px-20 gap-10 mt-10 m-auto p-auto justify-center text-center'>
            <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-9/12 sm:w-9/12 md:mt-10 sm:mt-10 text-center m-auto'>
                <div className={`h-[1px] ${step == 1 ? 'bg-white' : 'bg-[#17B26A]'}`} />

                {/* ${step == 1 ? 'bg-red-50' : 'bg-green-400'} <hr className={step < 2 ? 'text-gray-50' : 'bg-green-100'} /> */}
                <div className='flex justify-between '>
                    <div className='flex'>
                        {step > 1 ? <div className='bg-[#17B26A] h-4 w-4 rounded-full mt-2 mr-2'></div> : ""}
                        <p className={`text-[15px] studiofont mt-2 font-normal text-white text-left`}>CHOOSE A MEMBERSHIP TYPE</p>
                    </div>

                    <p className={`text-[15px] studiofont mt-2 font-normal text-white text-right`}>01</p>
                </div>

            </div>
            <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-9/12 sm:w-9/12 md:mt-10 sm:mt-10 mt-10 text-center m-auto'>
                <div className={`h-[1px] ${step == 2 ? 'bg-white' : step < 2 ? 'bg-neutral-400' : 'bg-[#17B26A]'}`} />
                <div className='flex justify-between'>
                    <div className='flex'>
                        {step > 2 ? <div className='bg-[#17B26A] h-4 w-4 rounded-full mt-2 mr-2'></div> : ""}
                        <p className={`text-[15px] studiofont mt-2 font-normal ${step >= 2 ? 'text-white' : 'text-neutral-400'} text-left`}>YOUR DETAILS</p>
                    </div>

                    <p className={`text-[15px] studiofont mt-2 font-normal ${step >= 2 ? 'text-white' : 'text-neutral-400'} text-right`}>02</p>
                </div>
            </div>
            <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-9/12 sm:w-9/12 md:mt-10 sm:mt-10 mt-10 text-center m-auto'>
                <div className={`h-[1px] ${step < 3 ? 'bg-neutral-400' : 'bg-white'}`} />
                <div className='flex justify-between'>
                    <p className={`text-[15px] studiofont mt-2 font-normal ${step == 3 ? 'text-white' : 'text-neutral-400'}`}>CONFIRM & PAY</p>
                    <p className={`text-[15px] studiofont mt-2 font-normal ${step == 3 ? 'text-white' : 'text-neutral-400'}`}>03</p>
                </div>
            </div>
        </div >
    )
}
