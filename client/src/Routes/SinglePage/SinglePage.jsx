import React from 'react'
import './SinglePage.css'
import { singlePostData } from '../../Lib/dummydata.js'
import { IoLocationOutline } from "react-icons/io5";
import catPP from '../../../src/assets/cat.webp'

export default function SinglePage() {
    return (
        <div className='single-page'>
            <div className='spd-wrapper'>
                <div className='sp-details'>
                    <div className='images'>
                        <div className='img-left'>
                            <img className='bigIMG' src={singlePostData.images[0]} alt="" />
                        </div>
                        <div className='img-right'>                        <img className='smallIMG' src={singlePostData.images[1]} alt="" />                        <img className='smallIMG' src={singlePostData.images[2]} alt="" />                        <img className='smallIMG' src={singlePostData.images[3]} alt="" />
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
            <div className="sp-features">right</div>
        </div >
    )
}
