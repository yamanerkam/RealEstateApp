import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import './ChatWindow.css'
export default function ChatWindow({ username, img }) {
    const [togle, setTogle] = useState(true)
    return (
        <div className={`chat-window ${!togle ? 'ch-off' : ''}`}>
            <div className="ch-header">
                <div className='first-ch'>
                    <img src={img} alt="" />
                    <span>{username}</span>
                </div>
                <IoClose onClick={(() => setTogle(false))} className='ch-icon' size={32} />
            </div>
            <div className="body-ch">
                <span className='msg other'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span>
                <span className='msg me'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span>
                <span className='msg other'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span>
                <span className='msg me'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span><span className='msg other'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span>
                <span className='msg me'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span><span className='msg other'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span>
                <span className='msg me'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span><span className='msg other'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span>
                <span className='msg me'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span><span className='msg other'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span>
                <span className='msg me'>Lorem ipsum dolor sit amet
                    <span>1 hour ago</span>
                </span>
            </div>
            <div className="input-ch">
                <input type="text" />
                <button>Send</button>
            </div>
        </div>
    )
}
