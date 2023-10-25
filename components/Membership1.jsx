'use client'
import React, { useContext } from 'react'
import { MembershipDiv } from './MembershipDiv'
import { NonVotingMembership } from './NonVotingMembership'
import { Context } from '@app/context/Context'


export const Membership1 = () => {

    const { step, nextStep } = useContext(Context)
    console.log(step)

    return (
        <>
            <MembershipDiv />
            <NonVotingMembership />
            <div className='w-72 h-12 m-auto my-12 flex gap-1 items-center '>
                <div className='w-5/6 h-12 bg-neutral-500 items-center text-center'>
                    <button className='mt-2 bwStretchfont text-xl items-center text-neutral-800 font-extrabold'>NEXT:YOUR DETAILS</button>
                </div>
                <div className='w-1/6 h-12 bg-neutral-500 items-center text-center'>
                </div>
            </div>
        </>
    )
}
