import React from 'react'
import './UserInformation.css'
export default function UserInformation({ img, username, email }) {
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
            </div>
        </div>
    )
}
