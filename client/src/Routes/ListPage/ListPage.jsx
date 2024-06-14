import React, { useState } from 'react'
import './ListPage.css'
import { CiSearch } from "react-icons/ci";

export default function ListPage() {
    const [cityName, setCityName] = useState('London')

    const [formData, setFormData] = useState({
        location: "",
        type: "",
        property: "",
        min: "",
        max: "",
        bedroom: ""
    })


    const handleForm = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }


    return (
        <div className='list-page'>
            <div className='list-left'>
                <span className='list-left-title'>
                    Search results for <b>{cityName}</b>
                </span>
                <div className='form-wrapper'>
                    <form onSubmit={handleForm}>
                        <div className='input-wrapper loc'>
                            <label htmlFor="location">Location</label>
                            <input
                                value={formData.location}
                                onChange={handleFormChange}
                                placeholder='City Location'
                                name='location'
                                type="text"
                                required
                            />
                        </div>

                        <div className='second-floor-wrapper'>
                            <div className='input-wrapper'>
                                <label htmlFor="type">Type</label>
                                <select
                                    value={formData.type}
                                    onChange={handleFormChange}
                                    id="type"
                                    name="type"
                                >
                                    <option value="any">any</option>
                                    <option value="Buy">Buy</option>
                                    <option value="Rent">Rent</option>
                                </select>
                            </div>

                            <div className='input-wrapper'>
                                <label htmlFor="property">Property</label>
                                <select
                                    id="property"
                                    value={formData.property}
                                    onChange={handleFormChange}
                                    name="property"
                                >
                                    <option value="any">any</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="House">House</option>
                                    <option value="Condo">Condo</option>
                                    <option value="Land">Land</option>
                                </select>
                            </div>

                            <div className='input-wrapper'>
                                <label htmlFor="min">Min Price</label>
                                <input
                                    value={formData.min}
                                    onChange={handleFormChange}
                                    placeholder='any'
                                    min="0"
                                    name='min'
                                    type="number"
                                />
                            </div>

                            <div className='input-wrapper'>
                                <label htmlFor="max">Max Price</label>
                                <input
                                    value={formData.max}
                                    onChange={handleFormChange}
                                    placeholder='any'
                                    min="0"
                                    name='max'
                                    type="number"
                                />
                            </div>

                            <div className='input-wrapper'>
                                <label htmlFor="bedroom">Bedroom</label>
                                <input
                                    value={formData.bedroom}
                                    onChange={handleFormChange}
                                    placeholder='any'
                                    min="0"
                                    name='bedroom'
                                    type="number"
                                />
                            </div>
                        </div>

                        <button type='submit'><CiSearch size={32} /></button>
                    </form>
                </div>
            </div>
            <div className='list-right'>
                right
            </div>
        </div>
    );
}
