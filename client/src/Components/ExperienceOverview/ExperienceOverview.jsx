import React from 'react'
import './ExperienceOverview.css'
export default function ExperienceOverview(props) {
    return (
        <div className='experience' >
            <h1>{props.years}</h1>
            <p>{props.title}</p>
        </div>
    )
}
