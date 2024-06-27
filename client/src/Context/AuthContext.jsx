import React, { createContext, useState } from 'react';

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('kam')
    const changeUser = (userName) => {
        setUser(userName)
    }
    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, changeUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }