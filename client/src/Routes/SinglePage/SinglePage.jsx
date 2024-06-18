import React, { useState } from 'react'
import './SinglePage.css'
import { singlePostData } from '../../Lib/dummydata.js'
import { IoLocationOutline } from "react-icons/io5";
import { PiPawPrintThin } from "react-icons/pi";
import { PiMoneyThin } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { LuSchool2 } from "react-icons/lu";
import { PiBusThin } from "react-icons/pi";
import { IoRestaurantOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";


import catPP from '../../../src/assets/cat.webp'
import Map from '../../Components/Map/Map.jsx';

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";



export default function SinglePage() {
    const [toggle, setToggle] = useState(false)

    const sliderOn = () => {
        setToggle(!toggle)
    }

    return (
        <div className='single-page'>

            <div className='spd-wrapper'>
                <div className='sp-details'>
                    <div className='images'>
                        <div className={`slider ${toggle ? 'slider-on' : 'slider-off'}`}>
                            <p onClick={sliderOn}> <IoClose size={64} /></p>
                            <FaChevronLeft className='sld-btn' size={64} />
                            <div className='sld-images'>xxxx</div>
                            <FaChevronRight className='sld-btn' size={64} />


                        </div>

                        <div className='img-left'>
                            <img className='bigIMG' onClick={sliderOn} src={singlePostData.images[0]} alt="" />
                        </div>
                        <div className='img-right'>
                            <img className='smallIMG' src={singlePostData.images[1]} alt="" />
                            <img className='smallIMG' src={singlePostData.images[2]} alt="" />
                            <img className='smallIMG' src={singlePostData.images[3]} alt="" />
                        </div>
                    </div>
                    <div className='mid-floor'>
                        <div className='mf-left'>
                            <h1>{singlePostData.title}</h1>
                            <span className='address'> <IoLocationOutline className='loc-icon' size={22} />
                                <p>{singlePostData.address}</p></span>
                            <p className='price'>$ {singlePostData.price}</p>
                        </div>

                        <div className='mf-right'>
                            <img src={catPP} alt="" />
                            <p className="userName">Erkam Yaman</p>
                        </div>
                    </div>

                    <div className='sp-d-bottom'>
                        <p>{singlePostData.description}</p>
                    </div>

                </div>
            </div>
            <div className="sp-features">
                <div className="spf-wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <VscTools size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <PiPawPrintThin size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                <p>Pets Allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <PiMoneyThin size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <SlSizeFullscreen size={22} className='ft-icon-s' />
                            <span>80 sqft</span>
                        </div>
                        <div className="size">
                            <IoBedOutline size={22} className='ft-icon-s' />
                            <span>2 beds</span>
                        </div>
                        <div className="size">
                            <FaBath size={22} className='ft-icon-s' />
                            <span>1 bathroom</span>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <LuSchool2 size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>School</span>
                                <p>250m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <PiBusThin size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <IoRestaurantOutline size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>200m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map />
                    </div>
                    <div className="buttons-sp">
                        <button>
                            <CiChat1 size={22} />
                            Send a Message
                        </button>
                        <button>
                            <CiBookmark size={22} />
                            Save the Place
                        </button>
                    </div>
                </div>
            </div >
        </div>


    )
}
