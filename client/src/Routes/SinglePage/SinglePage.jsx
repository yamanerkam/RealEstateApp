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
import { useLoaderData } from 'react-router-dom';
import parse from 'html-react-parser';



export default function SinglePage() {
    const post = useLoaderData()
    console.log(post)
    const content = post.post.PostDetail.desc
    const contentReal = parse(content);

    const postData = post.post
    const [toggle, setToggle] = useState(false)
    const [images, setImages] = useState([(singlePostData.images)])
    const [indexOfImg, setIndexOfImg] = useState(null)

    const sliderOn = (index) => {
        setToggle(!toggle)
        console.log(index)
        console.log(indexOfImg)
        setIndexOfImg(index)

    }

    const changeImages = (direction) => {
        if (direction === 'left') {
            console.log(direction)
            if (indexOfImg == 0) {
                setIndexOfImg(3)
                return
            }
            setIndexOfImg(indexOfImg - 1)

        } else if (direction === 'right') {
            if (indexOfImg == 3) {
                setIndexOfImg(0)
                return
            }
            setIndexOfImg(indexOfImg + 1)

            console.log(direction)
        }

    }

    return (
        <div className='single-page'>

            <div className='spd-wrapper'>
                <div className='sp-details'>
                    <div className='images'>
                        <div className={`slider ${toggle ? 'slider-on' : 'slider-off'}`}>
                            <div className='slider-wrapper'>
                                <p onClick={sliderOn}> <IoClose size={64} /></p>
                                <FaChevronLeft className='sld-btn' onClick={(() => changeImages('left'))} size={64} />
                                <div className='sld-images'><img src={postData.images[indexOfImg]} alt="" /></div>
                                <FaChevronRight className='sld-btn' onClick={(() => changeImages('right'))} size={64} />

                            </div>

                        </div>

                        <div className='img-left'>
                            <img className='bigIMG' onClick={(() => sliderOn(0))} src={postData.images[0]} alt="" />
                        </div>
                        <div className='img-right'>
                            <img className='smallIMG' onClick={(() => sliderOn(1))} src={postData.images[1]} alt="" />
                            <img className='smallIMG' onClick={(() => sliderOn(2))} src={postData.images[2]} alt="" />
                            <img className='smallIMG' onClick={(() => sliderOn(3))} src={postData.images[3]} alt="" />
                        </div>
                    </div>
                    <div className='mid-floor'>
                        <div className='mf-left'>
                            <h1>{postData.title}</h1>
                            <span className='address'> <IoLocationOutline className='loc-icon' size={22} />
                                <p>{postData.address}</p></span>
                            <p className='price'>$ {postData.price}</p>
                        </div>

                        <div className='mf-right'>
                            <img src={postData.user.avatar} alt="" />
                            <p className="userName">{postData.user.username}</p>
                        </div>
                    </div>

                    <div className='sp-d-bottom'>
                        <p>{contentReal.props.children}</p>
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
                                {postData.PostDetail.utilities === "owner" ? (
                                    <p>Owner is responsible</p>
                                ) : (
                                    <p>Tenant is responsible</p>
                                )}                            </div>
                        </div>
                        <div className="feature">
                            <PiPawPrintThin size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                {postData.PostDetail.pet === "allowed" ? (
                                    <p>Pets Allowed</p>
                                ) : (
                                    <p>Pets not Allowed</p>
                                )}
                            </div>
                        </div>
                        <div className="feature">
                            <PiMoneyThin size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>{postData.PostDetail.income}</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <SlSizeFullscreen size={22} className='ft-icon-s' />
                            <span>{postData.PostDetail.size} sqft</span>
                        </div>
                        <div className="size">
                            <IoBedOutline size={22} className='ft-icon-s' />
                            <span>{postData.bedroom} beds</span>
                        </div>
                        <div className="size">
                            <FaBath size={22} className='ft-icon-s' />
                            <span>{postData.bathroom} bathroom</span>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <LuSchool2 size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>School</span>
                                <p>{postData.PostDetail.school > 999
                                    ? postData.PostDetail.school / 1000 + "km"
                                    : postData.PostDetail.school + "m"}{" "}
                                    away</p>

                            </div>
                        </div>
                        <div className="feature">
                            <PiBusThin size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>{postData.PostDetail.bus > 999
                                    ? postData.PostDetail.bus / 1000 + "km"
                                    : postData.PostDetail.bus + "m"}{" "}
                                    away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <IoRestaurantOutline size={22} className='ft-icon' />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>{postData.PostDetail.restaurant > 999
                                    ? postData.PostDetail.restaurant / 1000 + "km"
                                    : postData.PostDetail.restaurant + "m"}{" "}
                                    away</p>                            </div>
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
