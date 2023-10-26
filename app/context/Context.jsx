'use client'
import React, { createContext, useState } from 'react'

export const Context = createContext()

const obj = {
    step: 1
}

const initState = {
    orgName: "",
    orgCategory: "",
    orgStreetAdd: "",
    orgCity: "",
    orgState: "",
    orgCountry: "",
    orgPostal: "",
    orgEmail: "",
    orgPhone: "",
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPass: "",
}

const ContextProvider = ({ children }) => {

    const [step, setStep] = useState(obj.step)
    const [membership, setMembership] = useState([])
    const [formdata, setFormData] = useState(initState)

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

    const handleChange = ({ name, value }) => {
        setFormData({ ...formdata, [name]: value })
    }

    return (
        <Context.Provider value={{ step, nextStep, prevStep, toPageOne, membership, setMembership, formdata, handleChange }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;