import { useState } from "react"
import { DataContext } from "./allContexts"

export const DataProvider = ({children}) =>{
     const [user, setUser] = useState([])

     return(
        <DataContext.Provider value={{user, setUser}}>
            {children}
        </DataContext.Provider>
     )
}