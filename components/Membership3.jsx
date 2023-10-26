'use client'
import { Context } from '@app/context/Context'
import Link from 'next/link'
import axios from 'axios';
import React, { useContext, useState } from 'react'

export const Membership3 = () => {

    const { step, nextStep, prevStep, formdata, toPageOne, membership } = useContext(Context)
    const [terms, setTerms] = useState(false)

    const handleRadio = (e) => {
        e.target.checked ? setTerms(true) : setTerms(false)
    }

    const handleConfirm = () => {
        if (!terms) {
            alert("Please check 'I have read and agree to the terms of service' before proceeding.");
        } else {
            alert("Conefirmation successfull !! Proceed to pay")
        }
    }

    const handlePay = async () => {
        try {
            const response = await axios.post("http://localhost:8080/users", formdata);
            const response2 = await axios.post("http://localhost:8080/subscription", { membership, userEmail: formdata.userEmail });

            alert("Registration successfull")

        } catch (error) {
            console.error('Axios Error:', error);
        }

    }

    return (
        <>
            <div className='py-20 px-8 2xl:px-10  xl:px-10  lg:px-10  md:px-2  sm:px-2  2xl:flex xl:flex lg:flex md:block sm:block'>
                <div className='2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-11/12 sm:w-11/12'>
                    <div className='bg-neutral-900 p-10 m-5'>
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:block justify-between content-center'>
                            <p className='studiofont prismTextColor 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-sm sm:text-sm text-left font-semibold'>Membership Type</p>
                            <button className='studiofont prismTextColor 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[10px] sm:text-[10px] font-normal items-center'
                                onClick={() => toPageOne()}
                            >EDIT</button>
                        </div>

                        <div className='text-left mt-8 text-lg  '>
                            <p className='studiofont prismTextColor font-semibold'>$3,027.21 / year</p>
                            <div className='flex'>
                                {
                                    membership?.map((el) => (
                                        <p className='studiofont prismTextColor font-normal mt-4 pr-1'>{el}</p>
                                    ))
                                }
                            </div>
                            <p className='studiofont prismTextColor font-normal'> CIMA Membership: $500-50,000 revenue per year</p>
                        </div>
                    </div>

                    <div className='bg-neutral-900 p-10 m-5'>
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:block justify-between content-center'>
                            <p className='studiofont prismTextColor 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-sm sm:text-sm text-left font-semibold'>Organization Details</p>
                            <button className='studiofont prismTextColor 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[10px] sm:text-[10px] font-normal items-center'
                                onClick={() => prevStep()}
                            >EDIT</button>
                        </div>

                        <div className='text-left mt-8'>
                            <p className='studiofont prismTextColor font-semibold text-lg'>{formdata.orgName ? formdata.orgName : "Artist Name"}</p>
                            <p className='studiofont prismTextColor font-normal mt-2 text-lg'>Artist</p>
                            <p className='studiofont prismTextColor font-normal text-sm'>{formdata.orgCategory ? formdata.orgCategory : "category"}</p>
                        </div>

                        <div className='text-left mt-8'>
                            <p className='studiofont prismTextColor font-normal text-lg'>{formdata.orgStreetAdd ? formdata.orgStreetAdd : "Street Address"} </p>
                            <p className='studiofont prismTextColor font-normal text-lg'>
                                {(formdata.orgCity || formdata.orgState || formdata.orgCountry) ?
                                    formdata.orgCity + " " + formdata.orgState + " " + formdata.orgCountry
                                    : "state, country"
                                }
                            </p>
                            <p className='studiofont prismTextColor font-normal text-lg'>{formdata.orgName ? formdata.orgName : "Artist Name"}</p>
                        </div>

                        <div className='text-left mt-8'>
                            <p className='studiofont prismTextColor font-normal text-lg'>{formdata.orgPostal ? formdata.orgPostal : "Postal/ zip code"} </p>
                            <p className='studiofont prismTextColor font-normal text-lg'>{formdata.orgPhone ? formdata.orgPhone : "Phone"}</p>
                            <p className='studiofont prismTextColor font-normal text-lg'>{formdata.orgEmail ? formdata.orgEmail : "Email"}</p>
                        </div>
                    </div>

                    <div className='bg-neutral-900 p-10 m-5'>
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:block justify-between content-center'>
                            <p className='studiofont prismTextColor 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-sm sm:text-sm text-left font-semibold'>Profile Details</p>
                            <button className='studiofont prismTextColor 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[10px] sm:text-[10px] font-normal items-center'
                                onClick={() => prevStep()}
                            >EDIT</button>
                        </div>

                        <div className='text-left mt-8'>
                            <p className='studiofont prismTextColor font-semibold text-lg'>{(formdata.userFirstName || formdata.userLastName) ? formdata.userFirstName + " " + formdata.userLastName : "FirstName LastName"}</p>
                            <p className='studiofont prismTextColor font-normal mt-2 text-lg'>{formdata.userEmail ? formdata.userEmail : "Email"}</p>
                        </div>

                        <div className='text-left mt-8'>
                            <p className='studiofont prismTextColor font-semibold text-lg'>Our monthly newsletter includes announcements and other exclusive details on events in your area.</p>

                            <label htmlFor="" className='prismTextColor'>
                                <input type="radio" className='w-4 h-4 mt-4' />
                                <span className='ml-2'>Opt out</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-11/12 sm:w-11/12 prismBGColor p-10 m-5'>
                    <p className='studiofont text-neutral-900 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-sm sm:text-sm text-left font-semibold'>Your Selection</p>
                    <div className='mt-8 text-lg text-neutral-900'>
                        <div className='flex justify-between studiofont'>
                            <p className='font-normal'>Basic Tier Membership</p>
                            <p className='font-normal '>$3,027.21</p>
                        </div>

                        <div className='flex justify-between studiofont mt-2'>
                            <p className='font-normal'>HST</p>
                            <p className='font-normal'>$393.54</p>
                        </div>
                    </div>
                    <div className='mt-4 bg-neutral-900 h-0.5' />
                    <div className='flex justify-between studiofont mt-6 text-lg text-neutral-900'>
                        <p className='font-semibold'>Total</p>
                        <p className='font-semibold '>$3,027.21</p>
                    </div>
                    <p className='studiofont text-base text-[#7A7A7A] text-left mt-8'>Add a coupon code (One time use only)</p>

                    <div className='text-left'>
                        <input type='text' className='studiofont text-2xl text-[#212121] text-left mt-4 prismBGColor w-full outline-none placeholder-neutral-400' placeholder='Coupon code' />
                    </div>
                    <div className='mt-4 bg-neutral-900 h-[1px]' />

                    <p className='studiofont text-neutral-900 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-sm sm:text-sm text-left font-semibold mt-16'>Payment Details</p>

                    <div className='mt-8'>
                        <p className='text-left text-[#7A7A7A]'>Name on card</p>
                        <input type='text' className='studiofont text-2xl text-[#212121] text-left mt-1 prismBGColor w-full outline-none placeholder-neutral-400' placeholder='Full Name' />
                        <div className='mt-2 bg-neutral-900 h-[1px]' />
                    </div>

                    <div className='mt-8'>
                        <p className='text-left text-[#7A7A7A]'>Credit card number</p>
                        <input type='number' className='studiofont text-2xl text-[#212121] text-left mt-1 prismBGColor w-full outline-none placeholder-neutral-400'
                            placeholder='XXXX - XXXX - XXXX - XXXX'
                            minLength="16" maxLength="19"
                        />
                        <div className='mt-2 bg-neutral-900 h-[1px]' />
                    </div>

                    <div className='2xl:flex xl:flex lg:flex md:flex sm:block 2xl:gap-6 xl:gap-6 lg:gap-2 md:gap-2 sm:gap-0'>
                        <div className='mt-8'>
                            <p className='text-left text-[#7A7A7A]'>Security code</p>
                            <input
                                type='number' className='studiofont text-2xl text-[#212121] text-left mt-1 prismBGColor w-full outline-none placeholder-neutral-400'
                                placeholder='XXX'
                                maxLength="3"
                            />
                            <div className='mt-2 bg-neutral-900 h-[1px]' />
                        </div>
                        <div className='mt-8'>
                            <p className='text-left text-[#7A7A7A]'>Expiry date</p>
                            <input type='month' className='studiofont text-2xl text-[#212121] text-left mt-1 prismBGColor w-full outline-none placeholder-neutral-400' placeholder='MM / YY' />
                            <div className='mt-2 bg-neutral-900 h-[1px]' />
                        </div>
                    </div>

                    <div className='text-left mt-6'>
                        <label htmlFor="" className='studiofont font-normal text-[#212121]'>
                            <input type="radio" className='w-4 h-4 mt-4'
                                onChange={handleRadio}
                            />
                            <span className='ml-2'>I have read and agree to the terms of service.</span>
                        </label>
                    </div>
                    <div className='w-40 mt-8 h-12 flex gap-1 items-center '>
                        <div className='w-5/6 h-12 bg-[#333333] items-center text-center'>
                            <button className='mt-2 bwStretchfont text-[21px] items-center prismTextColor font-extrabold'
                                onClick={handleConfirm}
                            >CONFIRM</button>
                        </div>
                        <div className='w-1/6 h-12 bg-[#333333] items-center text-center'>
                        </div>
                    </div>

                </div>

            </div>

            <div className='w-40 mt-8 h-12 flex gap-1 items-center m-auto'>
                <div className='w-5/6 h-12 prismBGColor items-center text-center'>
                    <button className='mt-2 bwStretchfont text-[21px] items-center text-[#333333] font-extrabold'
                        onClick={handlePay}
                    >PAY</button>
                </div>
                <div className='w-1/6 h-12 prismBGColor items-center text-center'>
                </div>
            </div>
        </>
    )
}
