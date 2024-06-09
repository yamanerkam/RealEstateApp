import React from 'react'
import './Navbar.css'
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
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

            <div className="left">
                <a href="">Sign in</a>
                <a href="">Sign up</a>
            </div>
            <div className="dropdown">
                <GiHamburgerMenu size={25} />
            </div>
        </nav >
    )
}
