import React from 'react'
import './ProfilePage.css'
import catPP from '../../../src/assets/cat.webp'
import { listData } from '../../Lib/dummydata'
import UserInformation from '../../Components/UserInformation/UserInformation'
import HouseCard from '../../Components/HouseCard/HouseCard'
import MessageChat from '../../Components/MessageChat/MessageChat'
import ChatWindow from '../../Components/ChatWindow/ChatWindow'
export default function ProfilePage() {
    return (
        <div className='profile-page'>
            <div className='user-info'>
                <div className="user-info-wrapper">
                    <UserInformation email='kam@gmail.com' username='kam35' img={catPP} />
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
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                            <MessageChat lastMessage={'hello how are you? did you recieve the message that i sent you'.substring(0, 25) + '...'} userName='Erkam Yaman' img={catPP} />
                        </div>
                    </div>

                </div>

                <ChatWindow className='chat-window-whole' img={catPP} username={'Erkam Yaman'} />

            </div>


        </div>
    )
}
