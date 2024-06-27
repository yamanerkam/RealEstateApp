import React, { useState, useContext } from 'react'
import './UserInformation.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext.jsx';



export default function UserInformation({ img, username, email }) {
    const { currentUser, updateUser } = useContext(AuthContext)

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const handleLogout = async () => {
        console.log('clicked')
        setLoading(true)
        try {
            const res = await axios.post('http://localhost:3001/api/auth/logout', null,
                { withCredentials: true })

            console.log(res)
            if (res.status === 200) {
                updateUser('')
                navigate('/login');
            } else {
                console.error('Logout failed:', res.data.message); // Handle errors
            }
        } catch (error) {
            setError(error.response.data.message);

            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className='ui-section'>
            <div className="ui-top">
                <h1>User Information
                </h1>
                <button className='ui-top-btn'>Update Profile</button>
            </div>
            <div className="user-info-ui">
                <span className='user-img'>
                    Avatar:
                    <img className='user-info-img'
                        src={img}
                        alt=""
                    />
                </span>
                <span>
                    Username: <b>{username}</b>
                </span>
                <span>
                    E-mail: <b>{email}</b>
                </span>
                <button disabled={loading} onClick={handleLogout} className='ui-top-btn lgt'>Logout</button>
                {error && <span>{error}</span>}

            </div>
        </div>
    )
}
