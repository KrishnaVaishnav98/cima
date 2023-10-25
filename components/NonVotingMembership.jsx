'use client'
import React from 'react'
import { Button } from './Button'

export const NonVotingMembership = () => {
    return (
        <div className='mx-20 my-16 studiofont prismTextColor'>
            <div className='text-left'>
                <p className='text-2xl studiofont prismTextColor'>Non-Voting Memberships</p>
            </div>
            <div className='mt-10 2xl:flex xl:flex lg:flex justify-center text-center gap-10'>
                <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-5/6 sm:5/6 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8 p-8 bg-neutral-900'>
                    <div className='text-left leading-10'>
                        <p className='text-2xl leading-10 studiofont prismTextColor text-left mb-6 pb-2'>Affiliate</p>
                        <p className='studiofont text-lg pb-2'>Industry Services Companies  </p>
                    </div>
                    <Button text="SELECTED" onClick={() => console.log("Button clicked!")} />
                    <div className='w-full flex px-2 py-4 items-center text-center bg-[#333333] mt-10'>
                        <li className='pl-2 text-xl'>
                            <ul>
                            </ul>
                        </li>
                        <p className='text-xs text-left leading-5 font-normal bg-[#333333]'>Organizations based in Ontario are automatically provided a MO membership; included in the price.</p>
                    </div>
                </div>

                <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-5/6 sm:5/6 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8 p-8 bg-neutral-900'>
                    <div className='text-left leading-10'>
                        <p className='text-2xl leading-10 studiofont prismTextColor text-left mb-6 pb-2'>Affiliate</p>
                        <p className='studiofont text-lg pb-2'>Individual Musicians or Professionals  </p>
                    </div>
                    <Button text="SELECTED" onClick={() => console.log("Button clicked!")} />

                </div>

                <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-5/6 sm:5/6 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8 p-8 bg-neutral-900'>
                    <div className='text-left leading-10'>
                        <p className='text-2xl leading-10 studiofont prismTextColor text-left mb-6 pb-2'>Affiliate</p>
                        <p className='studiofont text-lg pb-2'>Not-for Profit Association    </p>
                    </div>
                    <Button text="CONTACT US" onClick={() => console.log("Button clicked!")} />
                </div>
            </div>
        </div>
    )
}