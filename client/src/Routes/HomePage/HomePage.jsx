import React, { useState } from 'react'
import './HomePage.css'
import { CiSearch } from "react-icons/ci";
import BGpng from '../../assets/bg2.png'
import ExperienceOverview from '../../Components/ExperienceOverview/ExperienceOverview.jsx'
export default function HomePage() {
    const [toggleBlackWhite, setToggleBlackWhite] = useState(true)
    const handleToggle = (value) => {
        if (value == 'buy') {
            setToggleBlackWhite(true)

        } else {
            setToggleBlackWhite(false)
        }

    }
    return (
        <div className='home'>

            <div className="rightSide">
                <h1>Find Real Estate & Get Your Dream Place</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo suscipit cum eius, iure est nulla animi consequatur facilis id pariatur fugit quos laudantium temporibus dolor ea repellat provident impedit!</p>


                <div className="search">
                    <div className="up">
                        <button onClick={() => handleToggle('buy')} className={`buy upBtn ${toggleBlackWhite && 'activeBtn'}`}>Buy</button>
                        <button onClick={() => handleToggle('rent')} className={`rent upBtn ${!toggleBlackWhite && 'activeBtn'}`}>Rent</button>
                    </div>
                    <div className="down">
                        <form className='down2' action="">
                            <input placeholder='City Location' type="text" />
                            <input placeholder='Min Price' type="number" />
                            <input placeholder='Max Price' type="number" />
                            <button><CiSearch size={32} />
                            </button>
                        </form>

                    </div>
                </div>
                <div>

                    <div className="exp">
                        <ExperienceOverview title='Years of Experience' years='16+' />
                        <ExperienceOverview title='Award Gained' years='200' />
                        <ExperienceOverview title='Property Ready' years='2000+' />
                    </div>

                </div>
            </div>

            <div className="leftSide">
                <img className='stpPic' src={BGpng} alt="" />
            </div>
        </div>
    )
}
