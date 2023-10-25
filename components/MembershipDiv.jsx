'use client'
import React from 'react'

import { Button } from './Button'

export const MembershipDiv = () => {
    return (
        <div className='mx-20 my-16 studiofont prismTextColor'>
            <div className='text-left'>
                <p className='text-2xl studiofont prismTextColor'>Canadian Independent Music Association (CIMA) Memberships</p>
                <p className='text-base text-neutral-300 '>Distributors should only chose between Class C and Class B Tiers.</p>
            </div>
            <div className='mt-10 2xl:flex xl:flex lg:flex justify-center text-center gap-10'>
                <div className='p-8 bg-neutral-900 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8'>
                    <div className='text-left leading-10'>
                        <p className='text-2xl leading-10 studiofont prismTextColor text-left mb-6 pb-2'>Class C</p>
                        <p className='bwStretchfont 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-text-4xl sm:text-4xl w-1/2 pb-2'>LESS THAN $500,000</p>
                        <p className='text-3xl bwStretchfont font-extrabold'>REVENUE* <span className='studiofont text-base prismTextColor font-semibold opacity-40'> /YEAR</span></p>
                    </div>
                    <Button text="SELECT" onClick={() => console.log("Button clicked!")} />
                    <div className='text-left'>
                        <p className='pt-4 pb-6 text-[8px] leading-3 prismTextColor studiofont font-light opacity-60'>*Subject to board approval. Companies can be audited.</p>
                    </div>
                    <div className='w-full flex px-2 py-4 items-center text-center bg-[#333333]'>
                        <li className='pl-2 text-xl'>
                            <ul>
                            </ul>
                        </li>
                        <p className='text-xs text-left leading-5 font-normal bg-[#333333]'>Organizations based in Ontario are automatically provided a MO membership; included in the price.</p>
                    </div>
                </div>

                <div className='p-8 bg-neutral-900 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8'>
                    <div className='text-left leading-10'>
                        <p className='text-2xl leading-10 studiofont prismTextColor text-left mb-6 pb-2'>Class B</p>
                        <p className='bwStretchfont 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-text-4xl sm:text-4xl w-1/2 pb-2'>$500,000 - $1,000,000</p>
                        <p className='text-3xl bwStretchfont font-extrabold'>REVENUE* <span className='studiofont text-base prismTextColor font-semibold opacity-40'> /YEAR</span></p>
                    </div>
                    <Button text="SELECT" onClick={() => console.log("Button clicked!")} />
                    <div className='text-left'>
                        <p className='pt-4 pb-6 text-[8px] leading-3 prismTextColor studiofont font-light opacity-60'>*Subject to board approval. Companies can be audited.</p>
                    </div>
                    <div className='w-full flex px-2 py-4 items-center text-center bg-[#333333]'>
                        <li className='pl-2 text-xl'>
                            <ul>
                            </ul>
                        </li>
                        <p className='text-xs text-left leading-5 font-normal bg-[#333333]'>Organizations based in Ontario are automatically provided a MO membership; included in the price.</p>
                    </div>
                </div>

                <div className='p-8 bg-neutral-900 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8'>
                    <div className='text-left leading-10'>
                        <p className='text-2xl leading-10 studiofont prismTextColor text-left mb-6 pb-2'>Class A</p>
                        <p className='bwStretchfont 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-text-4xl sm:text-4xl w-1/2 pb-2'>MORE THAN $1,000,000</p>
                        <p className='text-3xl bwStretchfont font-extrabold'>REVENUE* <span className='studiofont text-base prismTextColor font-semibold opacity-40'> /YEAR</span></p>
                    </div>
                    <Button text="SELECT" onClick={() => console.log("Button clicked!")} />
                    <div className='text-left'>
                        <p className='pt-4 pb-6 text-[8px] leading-3 prismTextColor studiofont font-light opacity-60'>*Subject to board approval. Companies can be audited.</p>
                    </div>
                    <div className='w-full flex px-2 py-4 items-center text-center bg-[#333333]'>
                        <li className='pl-2 text-xl'>
                            <ul>
                            </ul>
                        </li>
                        <p className='text-xs text-left leading-5 font-normal bg-[#333333]'>Organizations based in Ontario are automatically provided a MO membership; included in the price.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
