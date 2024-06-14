import React from 'react'

export default function HouseCard(props) {
    return (
        <div className='house-card'>
            <div className="img-wrapper">
                <img src={props.img} alt="" />
            </div>
            <div className="details-wrapper">
                <h1>{props.title}</h1>
                <div className='adress'> icon <p>{props.address}</p></div>
                <p>$ {props.price}</p>
                <div className='bottom-bar'>
                    <span className="bedroom">{props.bedroom}</span>
                    <span className="bathroom">{props.bathroom}</span>
                </div>
            </div>
        </div>
    )
}
