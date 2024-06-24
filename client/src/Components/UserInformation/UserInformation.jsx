import React from 'react'
import './UserInformation.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function UserInformation({ img, username, email }) {
    const navigate = useNavigate();
    const handleLogout = async () => {
        console.log('clicked')
        try {
            const res = await axios.post('http://localhost:3001/api/auth/logout', null,
                { withCredentials: true })

            console.log(res)
            if (res.status === 200) {
                localStorage.removeItem('user');
                navigate('/login');
            } else {
                console.error('Logout failed:', res.data.message); // Handle errors
            }
        } catch (error) {
            console.log(error)
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
                <button onClick={handleLogout} className='ui-top-btn lgt'>Logout</button>
            </div>
        </div>
    )
}
