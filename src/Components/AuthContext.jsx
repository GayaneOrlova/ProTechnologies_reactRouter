import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState(false)

    const login = (password, success, failure) => {
        if (password === 'qwerty') {
            setAuth(true)
            success()
        } else {
            setAuth(false)
            failure()
        }
    }
    const logout = () => {
        setAuth(false)
    }

    const value = {auth, login, logout}

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
