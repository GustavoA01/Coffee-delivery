import { ReactNode, createContext, useState } from "react"

interface PaymentContextProps{
    children:ReactNode
}

interface PaymentProps{
    pay:object
    setPayment:(paymentForm:object)=>void
}

export const ContextPayment = createContext({} as PaymentProps)

export function PaymentContext({children}:PaymentContextProps){
    const [pay,setPay] = useState({})

    function setPayment(paymentForm:object){
        setPay(paymentForm)
    }

    return (
        <ContextPayment.Provider value={{setPayment,pay}}>
            {children}
        </ContextPayment.Provider>
    )
}