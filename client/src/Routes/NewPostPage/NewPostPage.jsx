import React from 'react'
import './NewPostPage.css'
export default function NewPostPage() {
    return (
        <div className="newPostPage">
            <div className="formContainer">
                <h1>Add New Post</h1>
                <div className="wrapper">
                    <form>
                        <div className="item">
                            <label for="title">Title</label>
                            <input id="title" name="title" type="text" />
                        </div>
                        <div className="item">
                            <label for="price">Price</label>
                            <input id="price" name="price" type="number" />
                        </div>
                        <div className="item">
                            <label for="address">Address</label>
                            <input id="address" name="address" type="text" />
                        </div>
                        <div className="item description">
                            <label for="desc">Description</label>
                            <textarea id="desc" name="desc"></textarea>
                        </div>
                        <div className="item">
                            <label for="city">City</label>
                            <input id="city" name="city" type="text" />
                        </div>
                        <div className="item">
                            <label for="bedroom">Bedroom Number</label>
                            <input min="1" id="bedroom" name="bedroom" type="number" />
                        </div>
                        <div className="item">
                            <label for="bathroom">Bathroom Number</label>
                            <input min="1" id="bathroom" name="bathroom" type="number" />
                        </div>
                        <div className="item">
                            <label for="latitude">Latitude</label>
                            <input id="latitude" name="latitude" type="text" />
                        </div>
                        <div className="item">
                            <label for="longitude">Longitude</label>
                            <input id="longitude" name="longitude" type="text" />
                        </div>
                        <div className="item">
                            <label for="type">Type</label>
                            <select name="type">
                                <option value="rent" selected>
                                    Rent
                                </option>
                                <option value="buy">Buy</option>
                            </select>
                        </div>
                        <div className="item">
                            <label for="property">Property</label>
                            <select name="property">
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="condo">Condo</option>
                                <option value="land">Land</option>
                            </select>
                        </div>
                        <div className="item">
                            <label for="utilities">Utilities Policy</label>
                            <select name="utilities">
                                <option value="owner">Owner is responsible</option>
                                <option value="tenant">Tenant is responsible</option>
                                <option value="shared">Shared</option>
                            </select>
                        </div>
                        <div className="item">
                            <label for="pet">Pet Policy</label>
                            <select name="pet">
                                <option value="allowed">Allowed</option>
                                <option value="not-allowed">Not Allowed</option>
                            </select>
                        </div>
                        <div className="item">
                            <label for="income">Income Policy</label>
                            <input id="income" name="income" type="text" placeholder="Income Policy" />
                        </div>
                        <div className="item">
                            <label for="size">Total Size (sqft)</label>
                            <input min="0" id="size" name="size" type="number" />
                        </div>
                        <div className="item">
                            <label for="school">School</label>
                            <input min="0" id="school" name="school" type="number" />
                        </div>
                        <div className="item">
                            <label for="bus">Bus</label>
                            <input min="0" id="bus" name="bus" type="number" />
                        </div>
                        <div className="item">
                            <label for="restaurant">Restaurant</label>
                            <input min="0" id="restaurant" name="restaurant" type="number" />
                        </div>
                        <button className="sendButton">Add</button>
                        <span>error</span>
                    </form>
                </div>
            </div>
            <div className="sideContainer">

            </div>
        </div>

    )
}
