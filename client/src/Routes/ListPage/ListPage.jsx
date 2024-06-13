import React, { useState } from 'react'
import './ListPage.css'
export default function ListPage() {
    const [cityName, setCityName] = useState('London')
    return (
        <div className='list-page'>
            <div className='list-left'>
                <span>Search results for <b>{cityName}</b> </span>
                <div className='form-wrapper'>
                    <form action="">

                        <div className='location-wrapper'>
                            <label htmlFor="location">Location</label>
                            <input placeholder='City Location' name='location' type="text" />
                        </div>

                        <div></div>

                    </form>
                </div>

            </div>
            <div className='list-right'>
            </div>
        </div>
    )
}
