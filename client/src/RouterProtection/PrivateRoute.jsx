import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'

function PrivateRoute() {
    const { currentUser } = useContext(AuthContext)
    return currentUser ? <Outlet /> : <Navigate to={'/login'} />

}

export default PrivateRoute