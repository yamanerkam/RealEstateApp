import React from 'react'
import './HouseCard.css'
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";


export default function HouseCard(props) {
    return (
        <div className='house-card'>
            <div className="img-wrapper">
                <img src={props.img} alt="" />
            </div>
            <div className="details-wrapper">
                <h1>{props.title}</h1>
                <span className='address'> <IoLocationOutline className='loc-icon' size={22} />
                    <p>{props.address}</p></span>
                <p className='price'>$ {props.price}</p>
                <div className='bottom-bar'>
                    <div className="features">
                        <span className="room bedroom">
                            <IoBedOutline />
                            <p> <a href="">{props.bedroom}</a><a href=""> bedroom</a></p></span>
                        <span className="room bathroom">
                            <LuBath /> <p> <a href="">{props.bathroom}</a><a href=""> bathroom</a></p> </span>
                    </div>
                    <div className="buttons">
                        <button><CiBookmark size={22} />
                        </button>
                        <button><MdMessage size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
