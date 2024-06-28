import React, { useState, useContext } from 'react'
import './UpdatePage.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import noavatar from '../../../src/assets/noavatar.jpg'

export default function UpdatePage() {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext)

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(currentUser)



    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div className='update-page'>
            <form onSubmit={handleSubmit}>
                <h1>Update the account</h1>
                <label htmlFor="email">Email</label>
                <input required name='email' defaultValue={currentUser.email} onChange={handleChange} placeholder='Email' type="text" />
                <label htmlFor="username">Username</label>
                <input required name='username' defaultValue={currentUser.username} onChange={handleChange} placeholder='Username' type="text" />
                <label htmlFor="password">Password</label>
                <input required name='password' value={formData.password} onChange={handleChange} placeholder='Password' type="password" />
                <button disabled={loading} type='submit'>Update</button>
                {error && <span>{error}</span>}
            </form>
            <div className="image-container">
                <img src={currentUser.avatar || noavatar} alt="User Avatar" />
            </div>        </div>
    )
}
