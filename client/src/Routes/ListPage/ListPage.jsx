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

                        <div className='input-wrapper loc'>
                            <label htmlFor="location">Location</label>
                            <input placeholder='City Location' name='location' type="text" />
                        </div>

                        <div className='second-floor-wrapper'>

                            <div className='input-wrapper'>
                                <label htmlFor="type">Type</label>
                                <select id="type" name="type">
                                    <option value="any">any</option>
                                    <option value="Buy">Buy</option>
                                    <option value="Rent">Rent</option>
                                </select>
                            </div>


                            <div className='input-wrapper'>
                                <label htmlFor="property">Property</label>
                                <select id="property" name="property">
                                    <option value="any">any</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="House">House</option>
                                    <option value="Condo">Condo</option>
                                    <option value="Land">Land</option>
                                </select>
                            </div>

                            <div className='input-wrapper'>
                                <label htmlFor="Min Price">Min Price</label>
                                <input placeholder='any' min="0" name='Min Price' type="number" />
                            </div>

                            <div className='input-wrapper'>
                                <label htmlFor="Max Price">Max Price</label>
                                <input placeholder='any' min="0" name='Max Price' type="Number" />
                            </div>

                            <div className='input-wrapper'>
                                <label htmlFor="location">Bedroom</label>
                                <input placeholder='any' min="0" name='location' type="Number" />
                            </div>

                        </div>

                    </form>
                </div>
                <button></button>
            </div>
            <div className='list-right'>
                right
            </div>
        </div>
    )
}
