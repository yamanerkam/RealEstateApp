import React, { useState } from 'react'
import './HomePage.css'
import { CiSearch } from "react-icons/ci";
import BGpng from '../../assets/bg2.png'
import { useNavigate } from 'react-router-dom';

import ExperienceOverview from '../../Components/ExperienceOverview/ExperienceOverview.jsx'
export default function HomePage() {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [toggleBlackWhite, setToggleBlackWhite] = useState(true)
    const handleToggle = (value) => {
        if (value == 'buy') {
            setToggleBlackWhite(true)

        } else {
            setToggleBlackWhite(false)
        }

    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const formData = new FormData(e.target);
            const { loc, min, max } = Object.fromEntries(formData);
            let valueOfBR = '';
            const buyOrRent = () => {
                if (toggleBlackWhite) {
                    valueOfBR = 'buy'
                } else {
                    valueOfBR = 'rent'
                }
            }
            buyOrRent()
            console.log(loc, min, max, valueOfBR)
        } catch (error) {
            setError(error.response.data.msg)
        } finally {
            setLoading(false)

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
                        <form onSubmit={handleSubmit} className='down2' action="">
                            <input name='loc' placeholder='City Location' type="text" />
                            <input name='min' placeholder='Min Price' type="number" />
                            <input name='max' placeholder='Max Price' type="number" />
                            <button> disabled={loading} < CiSearch size={32} />
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
