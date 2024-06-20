import React from 'react'
import './MessageChat.css'

export default function MessageChat({ img, userName, lastMessage }) {
    return (

        <div className='message-chat'>
            <img src={img} alt="" />
            <span className='mc-username'>{userName}</span>
            <span>{lastMessage}</span>
        </div>
    )
}
