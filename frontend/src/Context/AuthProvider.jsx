import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const initialUserState = localStorage.getItem("medium") || Cookies.get("jwt");
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined)
    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
