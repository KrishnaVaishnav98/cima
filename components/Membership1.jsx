'use client'
import React, { useContext, useState } from 'react'
import { MembershipDiv } from './MembershipDiv'
import { NonVotingMembership } from './NonVotingMembership'
import { Context } from '@app/context/Context'


export const Membership1 = () => {

    const { step, nextStep, membership, setMembership } = useContext(Context)

    const [flag1, setFlag1] = useState(membership.includes("classC") ? true : false)
    const [flag2, setFlag2] = useState(membership.includes("classB") ? true : false)
    const [flag3, setFlag3] = useState(membership.includes("classA") ? true : false)

    const handleClick = () => {
        let newMembership = [...membership];

        if (flag1) {
            if (!newMembership.includes("classC")) {
                newMembership.push("classC");
            }
        } else if (!flag1) {
            if (newMembership.includes("classC")) {
                newMembership.splice(newMembership.indexOf("classC"), 1)
            }
        }
        if (flag2) {
            if (!newMembership.includes("classB")) {
                newMembership.push("classB");
            }
        } else if (!flag2) {
            if (newMembership.includes("classB")) {
                newMembership.splice(newMembership.indexOf("classB"), 1)
            }
        }
        if (flag3) {
            if (!newMembership.includes("classA")) {
                newMembership.push("classA");
            }
        } else if (!flag3) {
            if (newMembership.includes("classA")) {
                newMembership.splice(newMembership.indexOf("classA"), 1)
            }
        }

        setMembership(newMembership);
        nextStep();
    };


    return (
        <>
            <MembershipDiv flag1={flag1} flag2={flag2} flag3={flag3} setFlag1={setFlag1} setFlag2={setFlag2} setFlag3={setFlag3} />
            <NonVotingMembership />
            <div className='w-72 h-12 m-auto my-12 flex gap-1 items-center '>
                <div className='w-5/6 h-12 bg-neutral-500 items-center text-center'>
                    <button onClick={handleClick} className='mt-2 bwStretchfont text-xl items-center text-neutral-800 font-extrabold'>NEXT:YOUR DETAILS</button>
                </div>
                <div className='w-1/6 h-12 bg-neutral-500 items-center text-center'>
                </div>
            </div>
        </>
    )
}
