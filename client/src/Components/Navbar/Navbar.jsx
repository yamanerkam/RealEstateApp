import React, { useState } from 'react'
import './Navbar.css'
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [toggle, setToggle] = useState(false)

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

            <div className="left">
                <a href="">Sign in</a>
                <a href="">Sign up</a>
            </div>

            <div className={`dropdown ${toggle && 'toggleOnDD'}`}>
                <GiHamburgerMenu onClick={handleToggle} size={25} />
            </div>

            <div className={`blackArea ${toggle && 'toggleOnBa'}`}></div>


        </nav >
    )
}
