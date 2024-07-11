import React, { useState } from 'react'
import './NewPostPage.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

export default function NewPostPage() {
    const [value, setValue] = useState('');
    const [error, setError] = useState()
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);
        try {
            const data = await axios.post('http://localhost:3001/api/post', {
                postData: {
                    title: inputs.title,
                    price: parseInt(inputs.price),
                    address: inputs.address,
                    city: inputs.city,
                    bedroom: parseInt(inputs.bedroom),
                    bathroom: parseInt(inputs.bathroom),
                    type: inputs.type,
                    property: inputs.property,
                    latitude: inputs.latitude,
                    longitude: inputs.longitude,
                    images: images,
                },
                postDetail: {
                    desc: value,
                    utilities: inputs.utilities,
                    pet: inputs.pet,
                    income: inputs.income,
                    size: parseInt(inputs.size),
                    school: parseInt(inputs.school),
                    bus: parseInt(inputs.bus),
                    restaurant: parseInt(inputs.restaurant),
                },
            }, { withCredentials: true })
            console.log(data.data.id)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

        console.log(inputs)
    }

    return (
        <div className="newPostPage">
            <div className="formContainer">
                <h1>Add New Post</h1>
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="item">
                            <label htmlFor="title">Title</label>
                            <input id="title" name="title" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="price">Price</label>
                            <input id="price" name="price" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="address">Address</label>
                            <input id="address" name="address" type="text" />
                        </div>
                        <div className="item description">
                            <label>Description</label>
                            <ReactQuill theme="snow" value={value} onChange={setValue} />
                        </div>
                        <div className="item">
                            <label htmlFor="city">City</label>
                            <input id="city" name="city" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="bedroom">Bedroom Number</label>
                            <input min="1" id="bedroom" name="bedroom" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="bathroom">Bathroom Number</label>
                            <input min="1" id="bathroom" name="bathroom" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="latitude">Latitude</label>
                            <input id="latitude" name="latitude" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="longitude">Longitude</label>
                            <input id="longitude" name="longitude" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="type">Type</label>
                            <select name="type">
                                <option value="rent" selected>
                                    Rent
                                </option>
                                <option value="buy">Buy</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="property">Property</label>
                            <select name="property">
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="condo">Condo</option>
                                <option value="land">Land</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="utilities">Utilities Policy</label>
                            <select name="utilities">
                                <option value="owner">Owner is responsible</option>
                                <option value="tenant">Tenant is responsible</option>
                                <option value="shared">Shared</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="pet">Pet Policy</label>
                            <select name="pet">
                                <option value="allowed">Allowed</option>
                                <option value="not-allowed">Not Allowed</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="income">Income Policy</label>
                            <input id="income" name="income" type="text" placeholder="Income Policy" />
                        </div>
                        <div className="item">
                            <label htmlFor="size">Total Size (sqft)</label>
                            <input min="0" id="size" name="size" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="school">School</label>
                            <input min="0" id="school" name="school" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="bus">Bus</label>
                            <input min="0" id="bus" name="bus" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="restaurant">Restaurant</label>
                            <input min="0" id="restaurant" name="restaurant" type="number" />
                        </div>
                        <button type='submit' className="sendButton">Add</button>
                        {error && <span>{error}</span>}
                    </form>
                </div>
            </div>
            <div className="sideContainer">

            </div>
        </div>

    )
}
