import React from 'react'
import './HomePage.css'
import BGpng from '../../assets/bg.png'
export default function HomePage() {
    return (
        <div className='home'>

            <div className="rightSide">
                <h1>Find Real Estate & Get Your Dream Place</h1>
                <div className="search"></div>
                <div>

                </div>
            </div>

            <div className="leftSide">
                <img src={BGpng} alt="" />
            </div>
        </div>
    )
}
