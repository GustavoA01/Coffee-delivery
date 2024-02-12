import { ReactNode, createContext, useState } from "react"

interface AddressContextProps {
    children: ReactNode
}

interface AddressProps {
    userInfo:object
    setInfo:(addressInfo:object)=>void
}

export const InfoContext = createContext({} as AddressProps)

export function AddressContext({ children }: AddressContextProps,) {

    const [userInfo,setUserInfo] = useState({})

    function setInfo(addressInfo:object){
        setUserInfo(addressInfo)
    }

    return (
        <InfoContext.Provider value={{userInfo,setInfo}}>
            {children}
        </InfoContext.Provider>
    )
}