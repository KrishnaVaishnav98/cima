'use client'

import { Context } from '@app/context/Context';
import React, { useContext } from 'react'
import { AiFillLeftCircle } from "react-icons/ai";

export const Membership2 = () => {

    const { formdata, handleChange, nextStep, prevStep, membership } = useContext(Context)

    const handleNext = () => {
        // if (formdata.orgName && formdata.orgCategory && formdata.orgStreetAdd && formdata.orgCity && formdata.orgState && formdata.orgCountry && formdata.orgPostal && formdata.orgEmail && formdata.orgPhone && formdata.userFirstName && formdata.userLastName && formdata.userEmail && formdata.userPass) {
        nextStep()
        // } else {
        //     alert("Please fill all required details")
        // }
    }

    return (
        <div className='2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-5/6 sm:w-5/6 m-auto mt-20'>
            <div className='bg-neutral-900 p-10 m-5'>
                <p className='studiofont prismTextColor text-2xl text-left font-semibold'>Your Organization</p>
                <div className='text-left mt-8 w-full'>
                    <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                        type="text" placeholder='Your organization, group or company name'
                        name={"orgName"} value={formdata.orgName} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                    />
                    <hr className='prismTextColor mt-2' />
                </div>
                <div className='text-left mt-8 w-full text-neutral-400'>
                    <select name="orgCategory" className='bg-neutral-900 w-full outline-none'
                        value={formdata.orgCategory} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}>
                        <option value="" >Category of your organization</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <hr className='prismTextColor mt-2' />
                </div>
                <div className='text-left mt-8 w-full'>
                    <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                        type="text" placeholder='Street Address'
                        name={"orgStreetAdd"} value={formdata.orgStreetAdd} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                    />
                    <hr className='prismTextColor mt-2' />
                </div>

                <div className='2xl:flex xl:flex lg:flex md:block sm:block gap-10'>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="text" placeholder='City'
                            name={"orgCity"} value={formdata.orgCity} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                        />
                        <hr className='prismTextColor mt-2' />
                    </div>
                    <div className='text-left mt-8 w-full text-neutral-400'>
                        <select className='bg-neutral-900 w-full outline-none'
                            name={"orgState"} value={formdata.orgState} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                        >
                            <option value="" >Province / State</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <hr className='prismTextColor mt-2' />
                    </div>
                </div>

                <div className='2xl:flex xl:flex lg:flex md:block sm:block gap-10'>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="text" placeholder='Country'
                            name={"orgCountry"} value={formdata.orgCountry} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                        />
                        <hr className='prismTextColor mt-2' />
                    </div>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="number" placeholder='Postal / Zip'
                            name={"orgPostal"} value={formdata.orgPostal} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                        />
                        <hr className='prismTextColor mt-2' />
                    </div>
                </div>

                <div className='2xl:flex xl:flex lg:flex md:block sm:block gap-10'>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="email" placeholder='Organization Email Address'
                            name={"orgEmail"} value={formdata.orgEmail} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                        />
                        <hr className='prismTextColor mt-2' />
                    </div>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="tel" placeholder='Organization Phone Number'
                            name={"orgPhone"} value={formdata.orgPhone} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                        />
                        <hr className='prismTextColor mt-2' />
                    </div>
                </div>

            </div>

            <div className='bg-neutral-900 p-10 m-5 mt-8'>
                <p className='studiofont prismTextColor text-2xl text-left font-semibold'>Your Profile</p>

                <div className='2xl:flex xl:flex lg:flex md:block sm:block gap-10'>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="text" placeholder='First Name'
                            name={"userFirstName"} value={formdata.userFirstName} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                        />
                        <hr className='prismTextColor mt-2' />
                    </div>
                    <div className='text-left mt-8 w-full'>
                        <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                            type="text" placeholder='Last Name'
                            name={"userLastName"} value={formdata.userLastName} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                        />
                        <hr className='prismTextColor mt-2' />
                    </div>
                </div>

                <div className='text-left mt-8 w-full'>
                    <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                        type="email" placeholder='Email Address'
                        name={"userEmail"} value={formdata.userEmail} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                    />
                    <hr className='prismTextColor mt-2' />
                </div>

                <div className='text-left mt-8 w-full'>
                    <input className='bg-neutral-900 w-full outline-none prismTextColor placeholder-neutral-400'
                        type="password" placeholder='Password'
                        name={"userPass"} value={formdata.userPass} onChange={(e) => handleChange({ name: e.target.name, value: e.target.value })}
                    />
                    <hr className='prismTextColor mt-2' />
                </div>

            </div>



            <div className='flex gap-10 justify-center m-auto my-12'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <AiFillLeftCircle fontSize={"20px"} color={"#F5F3ED"} />
                    <button onClick={prevStep} className='mt-2 studiofont text-[15px] font-normal prismTextColor'> GO BACK</button>
                </div>
                <div className='w-72 h-12 flex gap-1 items-center' onClick={handleNext}>
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
