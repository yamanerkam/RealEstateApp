import React, { useState, useContext } from 'react'
import './Navbar.css'
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from '../../Context/AuthContext';
import noavatar from '../../../src/assets/noavatar.jpg'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser)
    const handleToggle = (e) => {
        e.preventDefault()
        setToggle(!toggle)
        console.log(toggle)
    }
    return (
        <nav className='nav'>
            <div className="right">
                <span>
                    <MdOutlineRealEstateAgent size={32} />
                    <p>KamEstate</p>
                </span>
                <div className="links">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                </div>

            </div>

            <div className={`left ${currentUser && 'left-off'}`}>
                <a href="/login">Sign in</a>
                <a href="/register">Sign up</a>
            </div>
            {currentUser && (<div className={`left`}>
                <img src={currentUser.avatar || noavatar} alt="" />
                <span href="">{currentUser.username}</span>
                <a href="/profile">Profile</a>
            </div>)}


            <div className={`dropdown ${toggle && 'toggleOnDD'}`}>
                <GiHamburgerMenu onClick={handleToggle} size={25} />
            </div>

            <div className={`blackArea ${toggle && 'toggleOnBa'}`}>
                <div className="linksBa">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                    <a href="">Sign in</a>
                    <a href="">Sign up</a>
                </div>
            </div>


        </nav >
    )
}
