'use client'
import React, { createContext, useState } from 'react'

export const Context = createContext()

const obj = {
    step: 1
}

const ContextProvider = ({ children }) => {

    const [step, setStep] = useState(obj.step)
    const [membership, setMembership] = useState([])

    const nextStep = () => {
        if (step <= 2) {
            setStep(step + 1)
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const toPageOne = () => {
        setStep(1)
    }

    return (
        <Context.Provider value={{ step, nextStep, prevStep, toPageOne, membership, setMembership }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;