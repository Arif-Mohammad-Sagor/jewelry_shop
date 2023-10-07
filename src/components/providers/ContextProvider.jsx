import { createContext, useState } from "react";

export const userContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <userContext.Provider value={user }>
            {children}
    </userContext.Provider>
)

}

export default ContextProvider;