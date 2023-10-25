'use client'

import React from 'react'
import { AiFillLeftCircle } from "react-icons/ai";

export const Membership2 = () => {
    return (
        <div className='2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-5/6 sm:w-5/6 m-auto mt-20'>
            <div className='bg-neutral-900 p-10 m-5'>
                <p className='studiofont prismTextColor text-2xl text-left font-semibold'>Your Organization</p>
                <div className='text-left mt-8 w-full'>
                    <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                        type="text" placeholder='Your organization, group or company name' />
                    <hr className='prismTextColor mt-2' />
                </div>
                <div className='text-left mt-8 w-full text-neutral-400'>
                    <select name="" id="" className='bg-neutral-900 w-full outline-none' >
                        <option value="" >Category of your organization</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                    <hr className='prismTextColor mt-2' />
                </div>
                <div className='text-left mt-8 w-full'>
                    <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                        type="text" placeholder='Street Address' />
                    <hr className='prismTextColor mt-2' />
                </div>

                <div className='2xl:flex xl:flex lg:flex md:block sm:block gap-10'>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="text" placeholder='City' />
                        <hr className='prismTextColor mt-2' />
                    </div>
                    <div className='text-left mt-8 w-full text-neutral-400'>
                        <select name="" id="" className='bg-neutral-900 w-full outline-none' >
                            <option value="" >Province / State</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <hr className='prismTextColor mt-2' />
                    </div>
                </div>

                <div className='2xl:flex xl:flex lg:flex md:block sm:block gap-10'>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="text" placeholder='Country' />
                        <hr className='prismTextColor mt-2' />
                    </div>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="text" placeholder='Postal / Zip' />
                        <hr className='prismTextColor mt-2' />
                    </div>
                </div>

                <div className='2xl:flex xl:flex lg:flex md:block sm:block gap-10'>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="email" placeholder='Organization Email Address' />
                        <hr className='prismTextColor mt-2' />
                    </div>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="tel" placeholder='Organization Phone Number' />
                        <hr className='prismTextColor mt-2' />
                    </div>
                </div>

            </div>

            <div className='bg-neutral-900 p-10 m-5 mt-8'>
                <p className='studiofont prismTextColor text-2xl text-left font-semibold'>Your Profile</p>

                <div className='2xl:flex xl:flex lg:flex md:block sm:block gap-10'>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="text" placeholder='First Name' />
                        <hr className='prismTextColor mt-2' />
                    </div>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="text" placeholder='Last Name' />
                        <hr className='prismTextColor mt-2' />
                    </div>
                </div>

                <div className='text-left mt-8 w-full'>
                    <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                        type="email" placeholder='Email Address' />
                    <hr className='prismTextColor mt-2' />
                </div>

                <div className='text-left mt-8 w-full'>
                    <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                        type="password" placeholder='Password' />
                    <hr className='prismTextColor mt-2' />
                </div>

            </div>



            <div className='flex gap-10 justify-center m-auto my-12'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <AiFillLeftCircle fontSize={"20px"} color={"#F5F3ED"} />
                    <button className='mt-2 studiofont text-[15px] font-normal prismTextColor'> GO BACK</button>
                </div>
                <div className='w-72 h-12 flex gap-1 items-center '>
                    <div className='w-5/6 h-12 bg-neutral-500 items-center text-center'>
                        <button className='mt-2 bwStretchfont text-[21px] items-center text-neutral-800 font-extrabold'>NEXT: CONFIRM & PAY</button>
                    </div>
                    <div className='w-1/6 h-12 bg-neutral-500 items-center text-center'>
                    </div>
                </div>
            </div>

        </div>
    )
}
