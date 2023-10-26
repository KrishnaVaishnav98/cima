'use client'
import { Membership1 } from '@components/Membership1';
import { Membership2 } from '@components/Membership2';
import { Membership3 } from '@components/Membership3';
import { MembershipDiv } from '@components/MembershipDiv';
import { NonVotingMembership } from '@components/NonVotingMembership';
import { Process } from '@components/Process';
import React, { useContext } from 'react';
import { Context } from './context/Context';
import { Membership4 } from '@components/Membership4';


const HomePage = () => {

    const { step } = useContext(Context)

    if (step == 4) {
        return (
            <Membership4 />
        )
    }

    return (
        <section className='w-full py-10 m-auto p-auto'>
            <div className='block 2xl:mt-28 xl:mt-28 lg:mt-28 md:mt-5 sm:mt-5 justify-center'>
                <div className="heading 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-[36] sm:text-[36] ">JOIN CIMA</div>
                <div className='heading2'>
                    <p className='2xl:text-base xl:text-base lg:text-base md:text-xs sm:text-xs'>Choose a CIMA and/or MO membership subscription below. Please note, CIMA member organizations based on Ontario Canada are automatically provided a MO subscription; the MO membership is included in the CIMA membership price.</p>
                </div>
                <Process />
            </div>
            {step == 1 ? <Membership1 /> : step == 2 ? <Membership2 /> : step == 3 ? <Membership3 /> : <Membership1 />}
        </section>
    );

}

export default HomePage;
