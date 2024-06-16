import React from 'react'
import './HouseCard.css'
import { LuBath } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";


export default function HouseCard({ item }) {
    return (
        <div className='house-card'>
            <div className="img-wrapper">
                <img src={item.img} alt="" />
            </div>
            <div className="details-wrapper">
                <h1><Link to={`/listing/${item.id}`}>{item.title}</Link></h1>
                <span className='address'> <IoLocationOutline className='loc-icon' size={22} />
                    <p>{item.address}</p></span>
                <p className='price'>$ {item.price}</p>
                <div className='bottom-bar'>
                    <div className="features">
                        <span className="room bedroom">
                            <IoBedOutline />
                            <p> <a href="">{item.bedroom}</a><a href="">bedroom</a></p></span>
                        <span className="room bathroom">
                            <LuBath /> <p> <a href="">{item.bathroom}</a><a href=""> bathroom</a></p> </span>
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
