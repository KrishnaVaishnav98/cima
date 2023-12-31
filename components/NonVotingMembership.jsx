'use client'
import React, { useState } from 'react'
import { Button } from './Button'

export const NonVotingMembership = () => {

    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)

    return (
        <div className='2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 my-16 studiofont prismTextColor'>
            <div className='2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center'>
                <p className='text-2xl studiofont prismTextColor'>Non-Voting Memberships</p>
            </div>
            <div className='mt-10 2xl:flex xl:flex lg:flex justify-center text-center gap-10'>
                <div className={`2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-5/6 sm:5/6 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8 m-auto p-8 bg-neutral-900 ${flag1 ? "border border-neutral-300" : null}`}>
                    <div className='text-left leading-10'>
                        <p className='text-2xl leading-10 studiofont prismTextColor text-left mb-6 pb-2'>Affiliate</p>
                        <p className='studiofont text-lg pb-2'>Industry Services Companies</p>
                    </div>
                    <Button text={`${flag1 ? "SELECTED" : "SELECT"}`} color={`${flag1 ? "bg-neutral-500" : "prismBGColor"}`} onClick={() => setFlag1(!flag1)} />
                    <div className='w-full flex 2xl:px-2 xl:px-2 lg:px-2 md:px-0 sm:px-0 py-4 items-center text-center bg-[#333333] mt-10'>
                        <li className='pl-2 text-xl'>
                            <ul>
                            </ul>
                        </li>
                        <p className='text-xs text-left leading-5 font-normal bg-[#333333]'>Organizations based in Ontario are automatically provided a MO membership; included in the price.</p>
                    </div>
                </div>

                <div className={`2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-5/6 sm:5/6 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8 m-auto p-8 bg-neutral-900 ${flag2 ? "border border-neutral-300" : null}`}>
                    <div className='text-left leading-10'>
                        <p className='text-2xl leading-10 studiofont prismTextColor text-left mb-6 pb-2'>Affiliate</p>
                        <p className='studiofont text-lg pb-2'>Individual Musicians or Professionals</p>
                    </div>
                    <Button text={`${flag2 ? "SELECTED" : "SELECT"}`} color={`${flag2 ? "bg-neutral-500" : "prismBGColor"}`} onClick={() => setFlag2(!flag2)} />

                </div>

                <div className={`2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-5/6 sm:5/6 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8 m-auto p-8 bg-neutral-900 ${flag3 ? "border border-neutral-300" : ''}`}>
                    <div className='text-left leading-10'>
                        <p className='text-2xl leading-10 studiofont prismTextColor text-left mb-6 pb-2'>Affiliate</p>
                        <p className='studiofont text-lg pb-2'>Not-for Profit Association</p>
                    </div>
                    <Button text={`${flag3 ? "SELECTED" : "SELECT"}`} color={`${flag3 ? "bg-neutral-500" : "prismBGColor"}`} onClick={() => setFlag3(!flag3)} />
                </div>
            </div>
        </div>
    )
}