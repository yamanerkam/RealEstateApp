import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'

function PublicRoute() {
    const { currentUser } = useContext(AuthContext)
    return currentUser ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoute