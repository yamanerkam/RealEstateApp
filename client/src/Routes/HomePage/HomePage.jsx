import React from 'react'
import './HomePage.css'
import BGpng from '../../assets/bg.png'
import ExperienceOverview from '../../Components/ExperienceOverview/ExperienceOverview.jsx'
export default function HomePage() {
    return (
        <div className='home'>

            <div className="rightSide">
                <h1>Find Real Estate & Get Your Dream Place</h1>

                <div className="paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo suscipit cum eius, iure est nulla animi consequatur facilis id pariatur fugit quos laudantium temporibus dolor ea repellat provident impedit!</p>

                </div>
                <div className="search"></div>
                <div>

                    <div className="exp">
                        <ExperienceOverview title='Years of Experience' years='16+' />
                        <ExperienceOverview title='Award Gained' years='200' />
                        <ExperienceOverview title='Property Ready' years='2000+' />
                    </div>

                </div>
            </div>

            <div className="leftSide">
                <img src={BGpng} alt="" />
            </div>
        </div>
    )
}
