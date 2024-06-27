import React, { useState, useContext } from 'react'
import './ProfilePage.css'
import noavatar from '../../../src/assets/noavatar.jpg'
import { listData } from '../../Lib/dummydata'
import UserInformation from '../../Components/UserInformation/UserInformation'
import HouseCard from '../../Components/HouseCard/HouseCard'
import MessageChat from '../../Components/MessageChat/MessageChat'
import ChatWindow from '../../Components/ChatWindow/ChatWindow'
import { AuthContext } from '../../Context/AuthContext';

export default function ProfilePage() {
    const { currentUser } = useContext(AuthContext)

    return (
        <div className='profile-page'>
            <div className='user-info'>
                <div className="user-info-wrapper">
                    <UserInformation email={currentUser.email} username={currentUser.username} img={currentUser.avatar || noavatar} />
                    <div className="my-list">
                        <div className="top-list">
                            <div className="ui-top">
                                <h1>My List
                                </h1>
                                <button className='ui-top-btn'>Create a New Post</button>

                            </div>
                        </div>

                        <div className="items-pp">

                            {listData && listData.map((item) => (
                                <HouseCard
                                    item={item}
                                />
                            ))}

                        </div>
                    </div>

                    <div className="my-list">
                        <div className="top-list">
                            <div className="ui-top">
                                <h1>Saved List
                                </h1>

                            </div>
                        </div>

                        <div className="items-pp">

                            {listData && listData.map((item) => (
                                <HouseCard
                                    item={item}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className='msg-wrap'>
                <div className="messages">
                    <div className="messages-wrapper">
                        <h1>Messages</h1>
                        <div className="all-chats">
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={currentUser.avatar || noavatar} />

                        </div>
                    </div>

                </div>

                <ChatWindow className='chat-window-whole' img={currentUser.avatar || noavatar} username={'Erkam Yaman'} />

            </div>


        </div>
    )
}
