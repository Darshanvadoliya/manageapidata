import { useState } from "react"
import { UserInfoContext } from "./allContexts"

export const UserInfoProvider = ({children}) =>{
     const [userInfo, setUserInfo] = useState(0)

     return(
        <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserInfoContext.Provider>
     )
}